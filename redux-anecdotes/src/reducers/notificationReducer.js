import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const initialState = null

const notificationSlice = createSlice({
    name: 'notification', initialState ,reducers: {
      setContent(state,action){
        return action.payload
      },
      resetContent(state,action){
        return null
      }
    }
})

export const { setContent,resetContent } = notificationSlice.actions

export const setNotification = (message,timeoutSeconds) =>{
  return dispatch => {
    dispatch(setContent(message))
    setTimeout(() => {dispatch(resetContent())}, timeoutSeconds*1000)
  }
}

export default notificationSlice.reducer