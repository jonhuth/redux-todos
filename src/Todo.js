import React from 'react';

function Todo({id, handleRemove, handleEdit, task = "new todo"}) {
  return( 
    <div>
      <div>
        {task}
      </div>
      <button onClick={handleRemove}>X</button>
      <button onClick={handleEdit}>Edit</button>

    </div>
  );
};

export default Todo;