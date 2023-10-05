import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

    const anecdotes = useSelector(state => state.filter
          ?state.anecdotes.filter(filteredAnecdotes=>
            filteredAnecdotes.content.toLowerCase()
            .match(state.filter.toLowerCase()))
          :state.anecdotes
    )

    const dispatch = useDispatch()

    const vote = (anecdote) => {
        const newAnecdote = {...anecdote,votes:anecdote.votes+1}
        dispatch(addVote(newAnecdote))
        dispatch(setNotification(`you have voted for '${anecdote.content}'`,5))
    }
    
    return(
        <>
            {[...anecdotes].sort((A, B) => B.votes - A.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes} votes
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                    </div>
            )}
        </>
    )
}

export default AnecdoteList