import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes' , initialState:[] , reducers: {
    addAnecdote(state,action){
      state.push(action.payload)
    },
    addVote(state,action){
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      const changedNote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes+1 
      }
      return state.map(anecdotes =>
        anecdotes.id !== id ? anecdotes : changedNote 
      ) 
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { addAnecdote, addVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer