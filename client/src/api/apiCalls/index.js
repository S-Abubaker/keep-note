import axios from 'axios'

const url = '*your backend url*'

export const addNote = (newNote) => axios.post(`${url}/api/notes`, newNote)

export const getNotes = () => axios.get(`${url}/api/notes`)

export const deleteNote = (id) => axios.delete(`${url}/api/notes/${id}`)