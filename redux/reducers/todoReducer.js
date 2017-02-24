function getId(todos = []) {
    return todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1
}

let todoReducer = function(todos = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [...todos, {
                //add new todo info
                text: action.text,
                completed: false,
                id: getId(todos)
            }]
        case 'COMPLETE_TODO':
            return todos.map((todo) => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        case 'DELETE_TODO':
            return todos.filter((todo) => {
                return todo.id !== action.id
            })
        default:
            return todos
    }
}

export default todoReducer
