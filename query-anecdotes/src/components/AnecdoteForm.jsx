import { createAnecdote } from "../../requests"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { setNotificationValue } from "./NotificationContext"

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = setNotificationValue()

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      dispatch({type:'SET',content:`anecdote '${newAnecdote.content}' was added succesfully`})
      setTimeout(() => {dispatch({type:'RESET'})}, 5000)
    },
    onError: () =>{
      dispatch({type:'SET',content:`anecdote too short, need to have at least be 5 characters`})
      setTimeout(() => {dispatch({type:'RESET'})}, 5000)
    },
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content,votes:0})
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
