import { useState, useEffect } from "react";
import { BsPlus, BsTrash, BsSearch } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import "./styles/booklist.css";

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
      const body = newBook;
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
      const body = copyBook;
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
          onClick={toggleDeleteForm}
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

            onClick={toggleAddCopyForm}
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
              <tr key={book.book_id}>
                <td>{book.book_id}</td>
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
            onChange={(e) => setCopyBook({ ...copyBook, copy: e.target.value })}
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

    </main>
  );
};


export default BookList;
 