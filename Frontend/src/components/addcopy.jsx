// addcopy.jsx

import React, { useState } from 'react';
import './styles/addcopy.css';
import { IoCloseSharp } from 'react-icons/io5';

const AddCopy = ({ onClose, onAddCopy, bookTitle }) => {
  const dummyBooks = [
    { id: 1234, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', availableCopies: 2, borrowedCopies: 1 },
    { id: 5678, title: 'To Kill a Mockingbird', author: 'Harper Lee', availableCopies: 0, borrowedCopies: 2 },
    { id: 9101, title: '1984', author: 'George Orwell', availableCopies: 5, borrowedCopies: 0 },
    { id: 2345, title: 'Brave New World', author: 'Aldous Huxley', availableCopies: 3, borrowedCopies: 1 },
    { id: 6789, title: 'The Catcher in the Rye', author: 'J.D. Salinger', availableCopies: 0, borrowedCopies: 3 },
    { id: 1122, title: 'Animal Farm', author: 'George Orwell', availableCopies: 2, borrowedCopies: 1 },
    { id: 1314, title: 'Lord of the Flies', author: 'William Golding', availableCopies: 0, borrowedCopies: 2 },
    { id: 1516, title: 'Pride and Prejudice', author: 'Jane Austen', availableCopies: 4, borrowedCopies: 0 },
    { id: 1718, title: 'The Hobbit', author: 'J.R.R. Tolkien', availableCopies: 0, borrowedCopies: 3 },
    { id: 2122, title: 'Moby-Dick', author: 'Herman Melville', availableCopies: 1, borrowedCopies: 2 },
    { id: 2324, title: 'Jane Eyre', author: 'Charlotte Brontë', availableCopies: 0, borrowedCopies: 3 },
    { id: 2526, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', availableCopies: 3, borrowedCopies: 0 },
    { id: 2728, title: 'The Odyssey', author: 'Homer', availableCopies: 0, borrowedCopies: 2 },
    { id: 2930, title: 'Frankenstein', author: 'Mary Shelley', availableCopies: 2, borrowedCopies: 1 },
    { id: 3132, title: 'Dracula', author: 'Bram Stoker', availableCopies: 0, borrowedCopies: 3 },
    { id: 3334, title: 'The Iliad', author: 'Homer', availableCopies: 4, borrowedCopies: 0 },
    { id: 3536, title: 'Wuthering Heights', author: 'Emily Brontë', availableCopies: 0, borrowedCopies: 2 },
    { id: 3738, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', availableCopies: 3, borrowedCopies: 0 },
    { id: 3940, title: 'Anna Karenina', author: 'Leo Tolstoy', availableCopies: 0, borrowedCopies: 3 },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [copiesToAdd, setCopiesToAdd] = useState(0);

  const handleCheckboxChange = (id) => {
    const updatedSelectedBooks = selectedBooks.includes(id)
      ? selectedBooks.filter((bookId) => bookId !== id)
      : [...selectedBooks, id];
    setSelectedBooks(updatedSelectedBooks);
  };

  const handleCopiesToAddChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setCopiesToAdd(isNaN(value) ? 0 : value);
  };

  const handleConfirm = () => {
    console.log('Confirm button clicked');
    // Handle the addition logic based on selectedBooks and copiesToAdd
    // ...

    // Close the AddCopy component
    onClose();
    // Trigger the onAddCopy callback to handle the actual addition in the parent component
    onAddCopy();
  };

  return (
    <div className='add-copy-container'>
      <button className='close-button' onClick={onClose}>
        <IoCloseSharp />
      </button>
      <h2>Add Copies</h2>
      <input
        type='text'
        placeholder='Search books...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Table showing all books */}
      <table>
        {/* Table headers */}
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Available Copies</th>
            <th>Borrowed Copies</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {dummyBooks
            .filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((book) => (
              <tr key={book.id}>
                <td>
                  <input
                    type='checkbox'
                    checked={selectedBooks.includes(book.id)}
                    onChange={() => handleCheckboxChange(book.id)}
                  />
                </td>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.availableCopies}</td>
                <td>{book.borrowedCopies}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* Input for the number of copies to add */}
      <div className='num-of-copies-input'>
        <label>Copies to Add:</label>
        <input
          type='number'
          value={copiesToAdd}
          onChange={handleCopiesToAddChange}
          min='0'
        />
      </div>
      {/* Confirm button */}
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default AddCopy;
