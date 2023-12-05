// addcopy.jsx

import React, { useState, useEffect} from "react";
import "./styles/addcopy.css";
import { IoCloseSharp } from "react-icons/io5";

const AddCopy = ({ onClose, onAddCopy, bookTitle }) => {
  const [books, setBookList] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/api/books/get")
     .then(res => res.json())
     .then(
       (result) => {
         setBookList(result);
         console.log(result);
       })
       },[]);
    const [searchTerm, setSearchTerm] = useState("");
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
    console.log("Confirm button clicked");
    // Handle the addition logic based on selectedBooks and copiesToAdd
    // ...

    // Close the AddCopy component
    onClose();
    // Trigger the onAddCopy callback to handle the actual addition in the parent component
    onAddCopy();
  };

  return (
    <div className="add-copy-container">
      <button className="close-button" onClick={onClose}>
        <IoCloseSharp />
      </button>
      <h2>Add Copies</h2>
      <input
        type="text"
        placeholder="Search books..."
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
            <th>Publis</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {books
            .filter((book) =>
              book.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((book) => (
              <tr key={book.isbn}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedBooks.includes(book.id)}
                    onChange={() => handleCheckboxChange(book.id)}
                  />
                </td>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author_name}</td>
                <td>{book.available}</td>
                <td>{book.borrowed}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* Input for the number of copies to add */}
      <div className="num-of-copies-input">
        <label>Copies to Add:</label>
        <input
          type="number"
          value={copiesToAdd}
          onChange={handleCopiesToAddChange}
          min="0"
        />
      </div>
      {/* Confirm button */}
      <button className="confirm-button1" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default AddCopy;
