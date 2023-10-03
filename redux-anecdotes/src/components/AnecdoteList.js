import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {

    const anecdotes = useSelector(state =>{
        if ( state.filter ) {
            return state.anecdotes.filter(filteredAnecdotes=>
                filteredAnecdotes.content.toLowerCase().match(state.filter.toLowerCase()))
          }else{return state.anecdotes}
    })

    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(addVote(id))
    }
    
    return(
        <>
            {anecdotes.sort((A, B) => B.votes - A.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes} votes
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                    </div>
            )}
        </>
    )
}

export default AnecdoteList