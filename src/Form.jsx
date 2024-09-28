import React, { useState } from 'react';

const Form = ({ onAddItem }) => {
  const [NewItem, setNewItem] = useState(""); 
  const [ErrorMessage, setErrorMessage] = useState(""); 

  function handleSubmit(e) {
    e.preventDefault();

    if (NewItem.trim() === "") { // Check for empty input
      setErrorMessage("Oops! Nothing to add to the list, type something.");
      return;
    }

    onAddItem(NewItem); // Pass new item to the parent component
    setNewItem(""); // Clear input
    setErrorMessage(""); // Clear error message
  }

  return (
    <form onSubmit={handleSubmit} className='new-item-form bg-gray-100 p-6 rounded-lg shadow-md mb-6'>
      <div className='form-row mb-4'>
        <label htmlFor='item' className='block text-lg font-medium text-gray-700 mb-2'>
          Your Item
        </label>
        <input
          value={NewItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'
        />
      </div>

      {ErrorMessage && (
        <p className="text-red-500 mb-4">{ErrorMessage}</p>
      )}

      <button className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'>
        Add
      </button>
    </form>
  );
};

export default Form;
