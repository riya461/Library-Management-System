import { useState, useEffect } from "react";
import { BsPlus, BsTrash, BsSearch } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import "./styles/booklist.css";
<<<<<<< HEAD

const BookList = () => {
  // search 
  const [searchTerm, setSearchTerm] = useState("");
  // books listing
  const [books, setBookList] = useState([]);

  // adding books 
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    total: 0,
  });
  const addBookVal = () => {
=======
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
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
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
<<<<<<< HEAD
=======

  
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
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
<<<<<<< HEAD
=======

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
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9

      console.log(newBook)
    } catch (err) {
      console.error(err.message);
    }
  };
<<<<<<< HEAD
  const handleAddBook = () => {
    console.log("On handle",newBook);
    onSubmitAdd();

  }



  // increase the number of a book
  const [showAddCopyForm, setShowAddCopyForm] = useState(false);
   const toggleAddCopyForm = () => {
    setShowAddCopyForm(!showAddCopyForm);
  };
  const [copyBook, setCopyBook] = useState({
    book_id: "",
    copy: 0,
  });
  const AddCopyval = async () => {
    try {
      const body = {copyBook};
      console.log("copyBook",body);
      const val = await fetch("http://localhost:5000/api/books/addc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log("On submit",val);
      console.log(copyBook);
      
    } catch (err) {
      console.error(err.message);
    }
    setShowAddCopyForm(false);
    addBookVal();
   
  }

  const handleCopy = () => {
    console.log("On handle copy");
    AddCopyval();
   }

  //  delete a book
   const [showAddDeleteForm, setShowAddDeleteForm] = useState(false);
   const toggleDeleteForm = () => {
    setShowAddDeleteForm(!showAddDeleteForm);
  };
  const [DeleteBook, setDeleteBook] = useState({
    book_id: "",
    Delete: 0,
    type: "available"
  });
  const AddDeleteval = async () => {
    try {
      const body = DeleteBook;
      console.log("DeleteBook",body);
      const val = await fetch("http://localhost:5000/api/books/delc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log("On submit",val);
      console.log(DeleteBook);
      
    } catch (err) {
      console.error(err.message);
    }
    setShowAddDeleteForm(false);
    addBookVal();
   
  }
  const AddAllDeleteval = async () => {
    try {
      const body = DeleteBook;
      console.log("DeleteBook",body);
      const val = await fetch("http://localhost:5000/api/books/del", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log("On submit",val);
      console.log(DeleteBook);
      
    } catch (err) {
      console.error(err.message);
    }
    setShowAddDeleteForm(false);
    addBookVal();
   
  }
  const handleDelete = () => {
    console.log("On handle delete");
    AddDeleteval();
   }
   const handleDeleteAll = () => {
    console.log("On handle all delete");
    AddAllDeleteval();
    
   }
  
=======
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
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
<<<<<<< HEAD
          onClick={toggleDeleteForm}
=======
          // onClick={toggleDeleteForm}
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
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

<<<<<<< HEAD
            onClick={toggleAddCopyForm}
=======
            // onClick={toggleAddCopyForm}
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
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
<<<<<<< HEAD
              <tr key={book.book_id}>
                <td>{book.book_id}</td>
=======
              <tr key={book.isbn}>
                <td>{book.isbn}</td>
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
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

<<<<<<< HEAD
          
=======
          <label>Book ID:</label>
          <input
            type="text"
            value={newBook.isbn}
            onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
          />

>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
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

          
          <label>Total Copies:</label>
          <input
            type="number"
<<<<<<< HEAD
            value={newBook.total}
            onChange={(e) =>
              setNewBook({ ...newBook, total: e.target.value })
            }
          />

=======
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

>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
          <button className="center-align-button" 
          onClick={handleAddBook}
          >
            Add Book
          </button>
        </div>
<<<<<<< HEAD
        )
      }


      {showAddCopyForm && (
        <div className="booklist-add-form" >
          <div className="form-header" >
            <h3>Add Copy Book</h3>
            <button
              className="close-button"
              onClick={() => setShowAddCopyForm(false)}
            >
              <IoCloseSharp />
            </button>
          </div>

          
          <label>Book Id:</label>
          <input
            type="text"
            value={copyBook.book_id}
            onChange={(e) => setCopyBook({ ...copyBook, book_id: e.target.value })}
          />

          <label>Number of new copy:</label>
          <input
            type="text"
            value={copyBook.copy}
            onChange={(e) => setCopyBook({ ...newBook, copy: e.target.value })}
          />
          <button className="center-align-button" 
          onClick={handleCopy}
          >
            Add Copies
          </button>
        </div>
      )
    }
      
      {showAddDeleteForm && (
        <div className="booklist-add-form" >
          <div className="form-header" >
            <h3>Add Delete Book</h3>
            <button
              className="close-button"
              onClick={() => setShowAddDeleteForm(false)}
            >
              <IoCloseSharp />
            </button>
          </div>

          
          <label>Book Id:</label>
          <input
            type="text"
            value={DeleteBook.book_id}
            onChange={(e) => setDeleteBook({ ...DeleteBook, book_id: e.target.value })}
          />

          <label>Number of copies to delete :</label>
          <input
            type="text"
            value={DeleteBook.Delete}
            onChange={(e) => setDeleteBook({ ...DeleteBook, Delete: e.target.value })}
            defaultValue={0}
          />
          <label>Borrowed or Available Book:</label>
          <select
            value={DeleteBook.type}
            onChange={(e) => setDeleteBook({ ...DeleteBook, type: e.target.value })}
          >
            <option value="available">Available</option>
            <option value="borrowed">Borrowed</option>
          </select>
          <button className="center-align-button" 
          onClick={handleDelete}
          >
            Delete copies
          </button>
          <button className="center-align-button" 
          onClick={handleDeleteAll}
          >
            Delete book
          </button>
        </div>
      )


      }
=======
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
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9

    </main>
  );
};


export default BookList;
<<<<<<< HEAD
 
=======


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

 
 
>>>>>>> f0afcbe66a7ca2790ea2e180490f0153a3649ef9
