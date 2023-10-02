import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const FilterForm = () => {

    const dispatch = useDispatch()

    const setFilter = (newFilter) =>{
        dispatch(filterChange(newFilter))
        console.log(newFilter)
    }

    return (
        <>
            <div style={{marginBottom:18}}>
                <em style={{fontSize:18,fontWeight:'Bold'}}>Filter by: </em>
                <input onChange={({target})=>setFilter(target.value)} />
            </div>
        </>
    )
}

export default FilterForm