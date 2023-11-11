import React, { useState, useEffect } from 'react';
import { BsPlus, BsTrash, BsSearch } from 'react-icons/bs';
import './styles/booklist.css';

const books = [
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
  

function BookList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    // Update the availability status for each book
    const updatedBookList = books.map(book => {
      const availability = getAvailability(book.availableCopies);
      return { ...book, availability };
    });

    setBookList(updatedBookList);
  }, []);

  const getAvailability = (availableCopies) => {
    return availableCopies > 0 ? 'Yes' : 'No';
  };

  // Sort the books alphabetically by title
  const sortedBooks = bookList.sort((a, b) => a.title.localeCompare(b.title));

  // Filter books based on the search term
  const filteredBooks = sortedBooks.filter(
    (book) => book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className='booklist-main-container'>
      <div className='booklist-search-container'>
        <input
          type='text'
          placeholder='Search books...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='booklist-search-icon-container'>
          <BsSearch className='booklist-search-icon' />
        </div>
      </div>
      <div className='booklist-title-actions'>
        <h3>BOOKS</h3>
        <div className='booklist-buttons-container'>
          <button className='booklist-delete-button'>
            <BsTrash /> Delete a Book
          </button>
          <button className='booklist-add-book-button'>
            <BsPlus /> Add New Book
          </button>
        </div>
      </div>
      <div className='booklist-table'>
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Author Name</th>
              <th>Available Copies</th>
              <th>Borrowed Copies</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.availableCopies}</td>
                <td>{book.borrowedCopies}</td>
                <td className={book.availability === 'Yes' ? 'available' : 'unavailable'}>
                  {book.availability}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default BookList;