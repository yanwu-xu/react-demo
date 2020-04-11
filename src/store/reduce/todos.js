const todos = (state = [{id: '999999', text: '111', completed: false}], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(({id, text, completed}) => (
                {id, text, completed: action.id === id ? !completed : completed}
            ))
        default:
            return state
    }
}

export default todos