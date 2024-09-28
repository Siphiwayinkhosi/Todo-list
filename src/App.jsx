import React, { useState } from 'react';
import Form from './Form'; 
import List from './List';

export const App = () => {
  const [Todos, setTodos] = useState([]); 

  // Function to add new item to the Todos
  const addNewItem = (NewItem) => {
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: NewItem, completed: false },
    ]);
  };

  // Function to toggle the completed status of a todo item
  const toggleComplete = (id) => {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo item
  const deleteItem = (id) => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className='max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Todo List</h1>
      
      
      <Form onAddItem={addNewItem} />

      
      <List Todos={Todos} toggleComplete={toggleComplete} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
