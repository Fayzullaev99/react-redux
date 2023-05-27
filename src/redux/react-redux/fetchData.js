import axios from 'axios'
const initialState = {
    loading: false,
    users: [],
    error: ''
}

function usersReducer(state = initialState, action) {
    if (action.type === 'loading') {
        return {
            ...state,
            loading: true,
        }
    }else if (action.type === 'success') {
        return {
            ...state,
            loading: false,
            users: action.payload,
            error:''
        }
    }else if (action.type === 'error') {
        return {
            ...state,
            loading: false,
            users: [],
            error: action.payload,
        }
    }
    return state
}

export default usersReducer

export async function fetchData(dispatch) {
    dispatch({ type: 'loading'})
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({ type: 'success', payload: response.data })
    } catch (error) {
        dispatch({ type: 'error', payload: error.message })
    }
}