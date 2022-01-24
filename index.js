import express, { json } from 'express'
import cors from 'cors'
import capture from 'capture-website'

const port = process.env.PORT || 9000

const app = express()
app.use(cors())
app.use(json())

app.get('/', (req, res) => {
    res.send('hello there')
})

app.post('/snap-shot', async (req, res) => {
    try {
        const base64 = await capture.base64(req.body.url, {
            launchOptions: {
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            }
        })
    
        res.json({ status: 'ok', base64 })
    }
    catch(error) {
        res.status(500).json({ error: error.message })
    }
})

app.listen(port)
