import { setNotificationValue } from './NotificationContext'
import { useQueryClient , useMutation} from '@tanstack/react-query'
import { updateAnecdote } from '../../requests'

const AnecdoteList = ({anecdotes}) => {

    const queryClient = useQueryClient()
    const dispatch = setNotificationValue()

    const voteAnecdoteMutation = useMutation(updateAnecdote, {
        onSuccess: () => {
        queryClient.invalidateQueries('anecdotes')
        },
    })

    const handleVote = (anecdote) => {
        voteAnecdoteMutation.mutate({...anecdote,votes:anecdote.votes+1})
        const message = `anecdote '${anecdote.content}' voted`
        dispatch({ type:'SET' , content:message })
        setTimeout(() => {dispatch({type:'RESET'})}, 5000)
    }

    return (
        <>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
        </>
    )
}

export default AnecdoteList