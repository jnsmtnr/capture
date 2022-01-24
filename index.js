import express, { json } from 'express'
import cors from 'cors'
import capture from 'capture-website'

const port = process.env.PORT || 9000

const app = express()
app.use(cors())
app.use(json())

app.post('/snap-shot', async (req, res) => {
    try {
        const base64 = await capture.base64(req.body.url)
    
        res.json({ status: 'ok', base64 })
    }
    catch(error) {
        res.statusCode(500).json({ error: error.message })
    }
})

app.listen(port)
