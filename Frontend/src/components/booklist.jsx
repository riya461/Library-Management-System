// BookList.jsx

import React from 'react';
import { BsPlus, BsTrash } from 'react-icons/bs';
import './styles/booklist.css';

const books = [
  { id: 1234, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true },
  { id: 5678, title: 'To Kill a Mockingbird', author: 'Harper Lee', available: false },
  { id: 9101, title: '1984', author: 'George Orwell', available: true },
  { id: 2345, title: 'Brave New World', author: 'Aldous Huxley', available: true },
  { id: 6789, title: 'The Catcher in the Rye', author: 'J.D. Salinger', available: false },
  { id: 1122, title: 'Animal Farm', author: 'George Orwell', available: true },
  { id: 1314, title: 'Lord of the Flies', author: 'William Golding', available: false },
  { id: 1516, title: 'Pride and Prejudice', author: 'Jane Austen', available: true },
  { id: 1718, title: 'The Hobbit', author: 'J.R.R. Tolkien', available: false },
  { id: 1920, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true },
  { id: 2122, title: 'Moby-Dick', author: 'Herman Melville', available: true },
  { id: 2324, title: 'Jane Eyre', author: 'Charlotte Brontë', available: false },
  { id: 2526, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', available: true },
  { id: 2728, title: 'The Odyssey', author: 'Homer', available: false },
  { id: 2930, title: 'Frankenstein', author: 'Mary Shelley', available: true },
  { id: 3132, title: 'Dracula', author: 'Bram Stoker', available: false },
  { id: 3334, title: 'The Iliad', author: 'Homer', available: true },
  { id: 3536, title: 'Wuthering Heights', author: 'Emily Brontë', available: false },
  { id: 3738, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', available: true },
  { id: 3940, title: 'Anna Karenina', author: 'Leo Tolstoy', available: false },
];

function BookList() {
  const uniqueTitles = new Set();
  const sortedBooks = [];

  for (const book of books) {
    if (!uniqueTitles.has(book.title)) {
      sortedBooks.push(book);
      uniqueTitles.add(book.title);
    }
  }

  // Sort the books alphabetically by title
  sortedBooks.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <main className='booklist-main-container'>
      <div className='booklist-main-title'>
        <h3>BOOKS</h3>
        <div>
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
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {sortedBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td className={book.available ? 'available' : 'unavailable'}>{book.available ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default BookList;

/* booklist.css */
// (Your existing CSS styles remain unchanged)
