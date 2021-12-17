import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading : true,
    error : '',
    post : []
}

const fetchData = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                error : '',
                post : action.payload
            }
        case 'FETCH_FAILURE':
            return {
                loading : false,
                error : 'Error fetching Information',
                post : []
            }
        default:
            return state
    }
}
 
function Counter() {
    const [state, dispatch] = useReducer(fetchData, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
            dispatch({type : 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH_FAILURE', payload: ''})
        })
    },[])

    return (
        <div style={{height:'791px', overflowY:'scroll', marginLeft:'35%', textAlign:'left'}}>
            <h3>Product List</h3>
            {state.post && state.post.map( p => <div> {p.title} </div>)}
        </div>
    )
}

export default Counter
