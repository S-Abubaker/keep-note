import express from 'express'
import { addNote, getNotes, deleteNote } from '../controllers/notes.js'

const router = express.Router()

router.post('/', addNote)

router.get('/', getNotes)

router.delete('/:id', deleteNote)

export default router