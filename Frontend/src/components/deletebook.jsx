
import React, { useState, useEffect} from "react";
import "./styles/DeleteBook.css";
import { IoCloseSharp } from "react-icons/io5";

const DeleteBook = () => {
  const [books, setBookList] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/api/books/del")
     .then(res => res.json())
     .then(
       (result) => {
         setBookList(result);
         console.log(result);
       })
       },[]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBooks, setSelectedBooks] = useState([]);
   

  const handleCheckboxChange = (id) => {
    const updatedSelectedBooks = selectedBooks.includes(id)
      ? selectedBooks.filter((bookId) => bookId !== id)
      : [...selectedBooks, id];
    setSelectedBooks(updatedSelectedBooks);
  };


  const handleConfirm = () => {
    console.log("Confirm button clicked");
    // Handle the addition logic based on selectedBooks and copiesToAdd
    // ...

    // Close the DeleteBook component
    
    // Trigger the onDeleteBook callback to handle the actual addition in the parent component
    
  };

  return (
    <div className="add-copy-container">
      <button className="close-button" onClick={onClose}>
        <IoCloseSharp />
      </button>
      <h2>Delete </h2>
      <input
        type="text"
        placeholder="Enter Book ID"
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
      
      <button className="confirm-button1" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default DeleteBook;

