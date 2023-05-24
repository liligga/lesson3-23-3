const initialState = {
    todos: []
}

const todoReducer = (state=initialState, action) => {
    if (action.type == 'ADD_TODO') {
        return {...todos, 
            todos: [...state.todos, action.payload]}
    }
    else if (action.type == 'REMOVE_TODO') {
        return state
    }
    return state
}

export const addTodo = () => ({type: "ADD_TODO"})

export default todoReducer