import { useState, useEffect } from "react";
import { BsPlus, BsTrash, BsSearch } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import "./styles/booklist.css";
import DeleteBook from "./deletebook";
// import AddCopy from "./addcopy";

const BookList = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBookList] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  const [newBook, setNewBook] = useState({
    isbn: "",
    title: "",
    author: "",
    available: 0,
    total: 0,
  });
const addBookVal = () => {
  fetch("http://localhost:5000/api/books/get")
    .then(res => res.json())
    .then(
      (result) => {
        setBookList(result);
        console.log(result);
      })
      }
    
  useEffect(() => {
   fetch("http://localhost:5000/api/books/get")
    .then(res => res.json())
    .then(
      (result) => {
        setBookList(result);
        console.log(result);
      })
      },[]);

  
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const onSubmitAdd = async () => {
    try {
      const body = {newBook};
      console.log(body);
      const val = await fetch("http://localhost:5000/api/books/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log("On submit",val);
      console.log(newBook);
      setShowAddForm(false);
      addBookVal();

      console.log(newBook)
    } catch (err) {
      console.error(err.message);
    }
  };
  
  const handleAddBook = () => {
    console.log("On handle",newBook);

    // Validate that the ID is provided
    if (!newBook.isbn) {
      alert("Please provide a Book ID.");
      return;
    }
    
    onSubmitAdd();


  }

  const handleDeleteConfirm = () => {
    // Implement your book deletion logic here
    console.log(`Deleting book: ${bookToDelete.title}`);
    // Close the overlay
    setShowDeleteForm(false);
  };
  return (

    <main className="booklist-main-container">
      <div className="booklist-search-container">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="booklist-search-icon-container">
          <BsSearch className="booklist-search-icon" />
        </div>
      </div>
      <div className="booklist-title-actions">
        <h3>BOOKS</h3>
        <div className="booklist-buttons-container">
          <button className="booklist-delete-button" 
          // onClick={toggleDeleteForm}
          >
            <BsTrash /> Delete a Book
          </button>
          <button className="booklist-add-book-button" 
          onClick={toggleAddForm}
          >
            <BsPlus /> Add New Book
          </button>
          <button
            className="booklist-add-copy-button"

            // onClick={toggleAddCopyForm}
          >
            <BsPlus /> Add New Copy
          </button>
        </div>
      </div>
      <div className="booklist-table">
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
            {books
            .filter((book) =>
              book.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((book)  => (
              console.log(book),
              <tr key={book.isbn}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.available}</td>
                <td>{book.borrowed}</td>
                <td
                  className={
                    book.availability === "Yes" ? "available" : "unavailable"
                  }
                >
                  {book.availability}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddForm && (
        <div className="booklist-add-form" >
          <div className="form-header" >
            <h3>Add New Book</h3>
            <button
              className="close-button"
              onClick={() => setShowAddForm(false)}
            >
              <IoCloseSharp />
            </button>
          </div>

          <label>Book ID:</label>
          <input
            type="text"
            value={newBook.isbn}
            onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
          />

          <label>Title:</label>
          <input
            type="text"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />

          <label>Author:</label>
          <input
            type="text"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />

          <label>Available Copies:</label>
          <input
            type="number"
            value={newBook.available}
            onChange={(e) =>
              setNewBook({ ...newBook, available: e.target.value })
            }
          />

          <label>Total Copies:</label>
          <input
            type="number"
            value={newBook.total}
            onChange={(e) =>
              setNewBook({ ...newBook, total: e.target.value })
            }
          />

          <button className="center-align-button" 
          onClick={handleAddBook}
          >
            Add Book
          </button>
        </div>
      )
      }

      {/* Overlay for DeleteBook */}
      {showDeleteForm && (
        <DeleteBook
          onClose={() => setShowDeleteForm(false)} // Make sure onClose is passed correctly
          onDelete={handleDeleteConfirm}
          
        />
      )}

      {/* {showAddCopyForm && (
        <AddCopy
          onClose={() => setShowAddCopyForm(false)}
          onAddCopy={handleAddCopy}
          selectedBooks={selectedBooksForCopy}
        />
      )} */}

    </main>
  );
};


export default BookList;


  // const [showAddCopyForm, setShowAddCopyForm] = useState(false);
  // const [selectedBooksForCopy, setSelectedBooksForCopy] = useState([]);
  //  const toggleAddCopyForm = () => {
  //   setShowAddCopyForm(!showAddCopyForm);
  // };
  
  // const handleAddCopy = (copiesToAdd) => {
  //   // Implement your logic to add copies to the selected books
  //   console.log(`Adding ${copiesToAdd} copies to selected books`);
  //   // Update the book list accordingly
  //   // ...

  //   // Reset the selected books for copy
  //   // setSelectedBooksForCopy([]);

  //   // Close the add copy form
  //   // setShowAddCopyForm(false);
  // };
  // useEffect(() => {
  //   // Update the availability status for each book
  //   const updatedBookList = initialBooks.map((book) => {
  //     const availability = getAvailability(book.available);
  //     return { ...book, availability };
  //   });

  //   // Sort the book list alphabetically by title
  //   updatedBookList.sort((a, b) => a.title.localeCompare(b.title));

  //   setBookList(updatedBookList);
  // }, []);

  // useEffect(() => {
  //   // Filter and sort the book list based on the search term
  //   const filteredBooks = initialBooks
  //     .filter((book) =>
  //       book.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //     .map((book) => ({
  //       ...book,
  //       availability: getAvailability(book.available),
  //     }));

    // Sort the filtered books alphabetically by title
  //   filteredBooks.sort((a, b) => a.title.localeCompare(b.title));

  //   setBookList(filteredBooks);
  // }, [searchTerm]);

  // const getAvailability = (available) => {
  //   return available > 0 ? "Yes" : "No";
  // };




  

  //   // Set availability to 'Yes' for the new book
  //   const newBookWithAvailability = { ...newBook, availability: "Yes" };

  //   // Add the new book to the book list
  //   const updatedBookList = [...books, newBookWithAvailability].sort(
  //     (a, b) => a.title.localeCompare(b.title)
  //   );

  //   setBookList(updatedBookList);

  //   // Close the add form
  //   setShowAddForm(false);

  //   // Close the delete form
  //   setShowDeleteForm(false);



  // const toggleDeleteForm = () => {
  //   setShowDeleteForm(!showDeleteForm);
  // };

  

  // // const handleDeleteCancel = () => {
  // //   // Close the overlay
  // //   setShowDeleteForm(false);
  // // };

 
 
