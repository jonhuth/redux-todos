import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
  const INITIAL_STATE = { task: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = event => {
    const { name, value } = event.target;
    // set new state for form data
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSumbit = event => {
    event.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="task">create new task:</label>
      <input id="task" name="task"
        value={formData.task} onChange={handleChange} />
      <button>submit</button>
    </form>
  )
};

export default NewTodoForm; 