import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import NotesRoute from './routes/notes.js'

dotenv.config()

const app = express()

app.use(express.json({ limit: '10mb', extended: 'true' }))
app.use(express.urlencoded({ limit: '10mb', extended: 'true' }))
app.use(cors())

app.use('/api/notes', NotesRoute)

app.get('/', (req, res) => {
    res.send('This is the keepNote web-app api 📝')
})

const PORT = process.env.PORT || 8000
const DB_CONNECT = process.env.MONGO_URI

mongoose.connect(DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))