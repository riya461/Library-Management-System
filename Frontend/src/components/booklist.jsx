import { useState, useEffect } from "react";
import { BsPlus, BsTrash, BsSearch } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import "./styles/booklist.css";
import DeleteBook from "./deletebook";
import AddCopy from "./addcopy";

const initialBooks = [
  {
    id: 1234,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    availableCopies: 2,
    borrowedCopies: 1,
  },
  {
    id: 5678,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    availableCopies: 0,
    borrowedCopies: 2,
  },
  {
    id: 9101,
    title: "1984",
    author: "George Orwell",
    availableCopies: 5,
    borrowedCopies: 0,
  },
  {
    id: 2345,
    title: "Brave New World",
    author: "Aldous Huxley",
    availableCopies: 3,
    borrowedCopies: 1,
  },
  {
    id: 6789,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    availableCopies: 0,
    borrowedCopies: 3,
  },
  {
    id: 1122,
    title: "Animal Farm",
    author: "George Orwell",
    availableCopies: 2,
    borrowedCopies: 1,
  },
  {
    id: 1314,
    title: "Lord of the Flies",
    author: "William Golding",
    availableCopies: 0,
    borrowedCopies: 2,
  },
  {
    id: 1516,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    availableCopies: 4,
    borrowedCopies: 0,
  },
  {
    id: 1718,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    availableCopies: 0,
    borrowedCopies: 3,
  },
  {
    id: 2122,
    title: "Moby-Dick",
    author: "Herman Melville",
    availableCopies: 1,
    borrowedCopies: 2,
  },
  {
    id: 2324,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    availableCopies: 0,
    borrowedCopies: 3,
  },
  {
    id: 2526,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    availableCopies: 3,
    borrowedCopies: 0,
  },
  {
    id: 2728,
    title: "The Odyssey",
    author: "Homer",
    availableCopies: 0,
    borrowedCopies: 2,
  },
  {
    id: 2930,
    title: "Frankenstein",
    author: "Mary Shelley",
    availableCopies: 2,
    borrowedCopies: 1,
  },
  {
    id: 3132,
    title: "Dracula",
    author: "Bram Stoker",
    availableCopies: 0,
    borrowedCopies: 3,
  },
  {
    id: 3334,
    title: "The Iliad",
    author: "Homer",
    availableCopies: 4,
    borrowedCopies: 0,
  },
  {
    id: 3536,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    availableCopies: 0,
    borrowedCopies: 2,
  },
  {
    id: 3738,
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    availableCopies: 3,
    borrowedCopies: 0,
  },
  {
    id: 3940,
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    availableCopies: 0,
    borrowedCopies: 3,
  },
];

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookList, setBookList] = useState(initialBooks);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    author: "",
    availableCopies: 0,
    borrowedCopies: 0,
  });

  const [bookToDelete, setBookToDelete] = useState(null);

  useEffect(() => {
    // Update the availability status for each book
    const updatedBookList = initialBooks.map((book) => {
      const availability = getAvailability(book.availableCopies);
      return { ...book, availability };
    });

    // Sort the book list alphabetically by title
    updatedBookList.sort((a, b) => a.title.localeCompare(b.title));

    setBookList(updatedBookList);
  }, []);

  useEffect(() => {
    // Filter and sort the book list based on the search term
    const filteredBooks = initialBooks
      .filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((book) => ({
        ...book,
        availability: getAvailability(book.availableCopies),
      }));

    // Sort the filtered books alphabetically by title
    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));

    setBookList(filteredBooks);
  }, [searchTerm]);

  const getAvailability = (availableCopies) => {
    return availableCopies > 0 ? "Yes" : "No";
  };

  const handleAddBook = () => {
    // Validate that the ID is provided
    if (!newBook.id) {
      alert("Please provide a Book ID.");
      return;
    }

    // Set availability to 'Yes' for the new book
    const newBookWithAvailability = { ...newBook, availability: "Yes" };

    // Add the new book to the book list
    const updatedBookList = [...bookList, newBookWithAvailability].sort(
      (a, b) => a.title.localeCompare(b.title)
    );

    setBookList(updatedBookList);

    // Close the add form
    setShowAddForm(false);

    // Close the delete form
    setShowDeleteForm(false);

    // Reset the new book state for the next entry
    setNewBook({
      id: "",
      title: "",
      author: "",
      availableCopies: 0,
      borrowedCopies: 0,
    });
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const toggleDeleteForm = () => {
    setShowDeleteForm(!showDeleteForm);
  };

  const handleDeleteConfirm = () => {
    // Implement your book deletion logic here
    console.log(`Deleting book: ${bookToDelete.title}`);
    // Close the overlay
    setShowDeleteForm(false);
  };

  const handleDeleteCancel = () => {
    // Close the overlay
    setShowDeleteForm(false);
  };

  const [showAddCopyForm, setShowAddCopyForm] = useState(false);
  const [selectedBooksForCopy, setSelectedBooksForCopy] = useState([]);

  const toggleAddCopyForm = () => {
    setShowAddCopyForm(!showAddCopyForm);
  };

  const handleAddCopy = (copiesToAdd) => {
    // Implement your logic to add copies to the selected books
    console.log(`Adding ${copiesToAdd} copies to selected books`);
    // Update the book list accordingly
    // ...

    // Reset the selected books for copy
    setSelectedBooksForCopy([]);

    // Close the add copy form
    setShowAddCopyForm(false);
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
          <button className="booklist-delete-button" onClick={toggleDeleteForm}>
            <BsTrash /> Delete a Book
          </button>
          <button className="booklist-add-book-button" onClick={toggleAddForm}>
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
            {bookList.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.availableCopies}</td>
                <td>{book.borrowedCopies}</td>
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
        <div className="booklist-add-form">
          <div className="form-header">
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
            value={newBook.id}
            onChange={(e) => setNewBook({ ...newBook, id: e.target.value })}
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
            value={newBook.availableCopies}
            onChange={(e) =>
              setNewBook({ ...newBook, availableCopies: e.target.value })
            }
          />

          <label>Borrowed Copies:</label>
          <input
            type="number"
            value={newBook.borrowedCopies}
            onChange={(e) =>
              setNewBook({ ...newBook, borrowedCopies: e.target.value })
            }
          />

          <button className="center-align-button" onClick={handleAddBook}>
            Add Book
          </button>
        </div>
      )}

      {/* Overlay for DeleteBook */}
      {showDeleteForm && (
        <DeleteBook
          onClose={() => setShowDeleteForm(false)} // Make sure onClose is passed correctly
          onDelete={handleDeleteConfirm}
          bookTitle={bookToDelete ? bookToDelete.title : ""}
        />
      )}

      {showAddCopyForm && (
        <AddCopy
          onClose={() => setShowAddCopyForm(false)}
          onAddCopy={handleAddCopy}
          selectedBooks={selectedBooksForCopy}
        />
      )}
    </main>
  );
};

export default BookList;
