import * as api from '../../apiCalls/index'

export const addNote = (newNote) => async (dispatch) => {
    try {
        const { data } = await api.addNote(newNote)
        dispatch({ type: 'ADD_NOTE', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getNotes = () => async (dispatch) => {
    try {
        const { data } = await api.getNotes()
        dispatch({ type: 'GET_NOTES', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteNote = (id) => async (dispatch) => {
    try {
        await api.deleteNote(id)
        dispatch({ type: 'DELETE_NOTE', payload: id })
    } catch (error) {
        console.log(error.message)
    }
}