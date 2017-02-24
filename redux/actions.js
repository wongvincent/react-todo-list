let actions = {
    addTodo: function(text) {
        return {
            type: 'ADD_TODO', 
            text: text
        }
    },

    completeTodo: function(id) {
        return {
            type: 'COMPLETE_TODO',
            id: id
        }
    },

    deleteTodo: function(id) {
        return {
            type: 'DELETE_TODO',
            id: id
        }
    },

    createNewUserId: function() {
        return {
            type: 'CREATE_USER_ID',
            id: Math.floor(Math.random() * Math.pow(10, 15))
        }
    }
}

export default actions