import React from 'react';

const List = ({ Todos, toggleComplete, deleteItem }) => {
  return (
    <ul className='list space-y-4'>
      {Todos.map((Todo) => (
        <li key={Todo.id} className='flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm'>
          <label className='flex items-center space-x-3'>
            <input
              type="checkbox"
              checked={Todo.completed}
              className='form-checkbox h-5 w-5 text-blue-600'
              onChange={() => toggleComplete(Todo.id)} 
            />
            <span className={`text-lg ${Todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
              {Todo.title}
            </span>
          </label>
          <button
            onClick={() => deleteItem(Todo.id)} 
            className='btn-danger bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition'>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
