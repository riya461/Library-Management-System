import React from "react";
import "./styles/addBook.css";

export const AddBook = () => {
  return (
    <form id="addBookForm">
      <h2>Add a New Book</h2>
      <label htmlFor="bookId">Book ID:</label>
      <input type="text" id="bookId" name="bookId" />
      <br />
      <label htmlFor="bookTitle">Title:</label>
      <input type="text" id="bookTitle" name="bookTitle" />
      <br />
      <label htmlFor="bookAuthor">Author:</label>
      <input type="text" id="bookAuthor" name="bookAuthor" />
      <br />
      <label htmlFor="bookAvailable">Available:</label>
      <input type="text" id="bookAvailable" name="bookAvailable" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};
