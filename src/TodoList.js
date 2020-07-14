import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import uuid from 'uuid/v4';

import { useSelector, useDispatch } from 'react-redux';

function TodoList() {
  // const [todos, setTodos] = useState([]);
  // reading from store
  const todos = useSelector(store => store.todos);
  // writing to store
  const dispatch = useDispatch();

  const removeTodo = id => dispatch({ type: 'DELETE_TODO', id })

  const editTodo = (id, updatedTodo) => dispatch({ type: 'UPDATE_TODO', id, updatedTodo});

  const renderTodos = () => {
    return (
      <div>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            handleRemove={() => removeTodo(todo.id)}
            handleEdit={() => editTodo(todo.id, "edited")}
            task={todo.task} />
        ))}
      </div>
    );
  };

    const addTodo = todo => {
      let newTodo = { ...todo, id: uuid() };
      // setTodos(todos => [...todos, newTodo]);
      dispatch({ type: 'ADD_TODO', newTodo });

    };

    return (
      <div className="TodoList">
        <NewTodoForm addTodo={addTodo} />
        {renderTodos()}
      </div>
    );
  };

  export default TodoList;