import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes' , initialState:[] , reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    setAnecdote(state, action) {
      return state.map(anecdotes =>
        anecdotes.id !== action.payload.id ? anecdotes : action.payload
      ) 
    }
  }
})

export const { appendAnecdote, setAnecdotes, setAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const addAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVote = votedAnecdote => {
  return async dispatch => {
    const editedAnecdote = await anecdoteService.editAnecdote(votedAnecdote,votedAnecdote.id)
    dispatch(setAnecdote(editedAnecdote))
  }
}

export default anecdoteSlice.reducer