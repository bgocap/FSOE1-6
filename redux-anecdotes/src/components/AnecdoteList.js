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

    const vote = (id,title) => {
        dispatch(addVote(id))
        dispatch(resetNotification())
        dispatch(setNotification(`you have voted for '${title}'`))
        setTimeout(() => {dispatch(resetNotification())}, 5000)
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
                        <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
                    </div>
                    </div>
            )}
        </>
    )
}

export default AnecdoteList