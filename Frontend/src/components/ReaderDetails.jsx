import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import "./styles/readerDetails.css";

const ReaderDetails = ({ reader, onClose }) => {
  // Placeholder functions for fine calculation and borrowed books
  const calculateFine = () => {
    // Replace with your logic to calculate fines
    return 5; // Placeholder value
  };

  const getBorrowedBooks = () => {
    // Replace with your logic to fetch borrowed books
    return [
      { title: "Book One", returnDueDate: "2023-12-01" },
      { title: "Book Two", returnDueDate: "2023-11-15" },
    ]; // Placeholder value
  };

  // Placeholder data
  const fine = calculateFine();
  const borrowedBooks = getBorrowedBooks();

  return (
    <div className="reader-details-overlay">
      <div className="reader-details-container">
        <button className="close-button" onClick={onClose}>
          <IoCloseSharp />
        </button>
        <h2>Reader Details</h2>
        <div className="reader-details-info">
          <div>
            <label>ID:</label>
            <p>{reader.id}</p>
          </div>
          <div>
            <label>Name:</label>
            <p>{reader.name}</p>
          </div>
          <div>
            <label>Email:</label>
            <p>{reader.email}</p>
          </div>
          <div>
            <label>Books Borrowed:</label>
            <p>{reader.booksBorrowed}</p>
          </div>
          <div>
            <label>Fine:</label>
            <p style={{ color: fine > 0 ? "red" : "inherit" }}>₹{fine}</p>
          </div>
        </div>

        <h3>Borrowed Books</h3>
        {borrowedBooks.length > 0 ? (
          <ul>
            {borrowedBooks.map((book) => (
              <li key={book.title}>
                <strong>{book.title}</strong> (Due: {book.returnDueDate})
              </li>
            ))}
          </ul>
        ) : (
          <p>No books borrowed.</p>
        )}
      </div>
    </div>
  );
};

export default ReaderDetails;
