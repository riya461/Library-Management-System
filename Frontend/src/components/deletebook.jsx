import React, { useState } from 'react';
import './styles/deletebook.css';
import { IoCloseSharp } from 'react-icons/io5';

const DeleteBook = ({ onClose, onDelete, bookTitle }) => {
  // Define dummy data directly in the component
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
  const [deleteOption, setDeleteOption] = useState('');
  const [copiesToDelete, setCopiesToDelete] = useState(0);

  const handleCheckboxChange = (id) => {
    const updatedSelectedBooks = selectedBooks.includes(id)
      ? selectedBooks.filter((bookId) => bookId !== id)
      : [...selectedBooks, id];
    setSelectedBooks(updatedSelectedBooks);
  };

  const handleDeleteOptionChange = (option) => {
    setDeleteOption(option);
  };

  const handleCopiesToDeleteChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setCopiesToDelete(isNaN(value) ? 0 : value);
  };

  const handleConfirm = () => {
    console.log('Confirm button clicked');
    // Handle the deletion logic based on deleteOption and selectedBooks
    // ...

    // Close the DeleteBook component
    onClose();
    // Trigger the onDelete callback to handle the actual deletion in the parent component (BookList)
    onDelete();
  };

  return (
    <div className='delete-book-container'>
      <button className='close-button' onClick={onClose}>
        <IoCloseSharp />
      </button>
      <h2>Delete Book</h2>
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
      {/* Delete options */}
      <div className='delete-options'>
        <label>Delete Option:</label>
        <select value={deleteOption} onChange={(e) => handleDeleteOptionChange(e.target.value)}>
          <option value=''>Select an option</option>
          <option value='deleteCopies'>Delete Copies</option>
          <option value='deleteBook'>Delete Book</option>
        </select>
      </div>
      {deleteOption === 'deleteCopies' && (
        <div className='num-of-copies-input'>
          <label>Copies to Delete:</label>
          <input
            type='number'
            value={copiesToDelete}
            onChange={handleCopiesToDeleteChange}
            min='0'
          />
        </div>
      )}
      {/* Confirm button */}
      <button className="confirm-button2" onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default DeleteBook;
