const INITIAL_STATE = {todos: []};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {...state, todos: [...state.todos, action.newTodo]};
    case "DELETE_TODO":
      return {...state, todos: state.todos.filter(todo => todo.id !== action.id)};
    case "UPDATE_TODO":
      // prevTodos => prevTodos.map(todo =>
      // todo.id === id ? { ...todo, task: updatedTodo } : todo)
      return {...state, todos: state.todos.map(todo => {
        if(todo.id === action.id) {
          return action.updatedTodo;
        }
        return todo;
      } )}
    default:
      return state;
  }
}

export default rootReducer;