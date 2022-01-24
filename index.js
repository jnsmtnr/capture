import express, { json } from 'express'
import cors from 'cors'
import capture from 'capture-website'

const app = express()
app.use(cors())
app.use(json())

app.post('/snap-shot', async (req, res) => {
    const base64 = await capture.base64(req.body.url)

    res.json({ status: 'ok', base64 })
})

app.listen(9000)
