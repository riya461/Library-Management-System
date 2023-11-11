import { useState } from "react";
import "./styles/issueReturn.css";

function IssueReturn() {
  const [userId, setUserId] = useState("");
  const [isValidUser, setIsValidUser] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [bookId, setBookId] = useState("");
  const [bookAvailable, setBookAvailable] = useState(false);

  function handleBookSelection(book) {
    // Implement logic to handle book selection
  }

  function handleBookReturn(book) {
    // Implement logic to return the book
  }

  function validateUser(userId) {
    // Implement logic to validate the user
    setIsValidUser(true);
  }

  function searchBookAvailability(bookId) {
    // Implement logic to search book availability
    setBookAvailable(true);
  }

  return (
    <div className="container">
      <h2>Issue and Return Books</h2>
      <div className="user-input">
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={() => validateUser(userId)} className="action-button">
          Validate
        </button>
      </div>

      {isValidUser && (
        <div className="button-group">
          <button onClick={() => setSelectedAction("issue")}>Issue Book</button>
          <button onClick={() => setSelectedAction("return")}>
            Return Book
          </button>
        </div>
      )}

      {selectedAction === "issue" && (
        <div>
          <div className="book-input">
            <label htmlFor="bookId">Book ID:</label>
            <input
              type="text"
              id="bookId"
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
            />
            <button
              onClick={() => searchBookAvailability(bookId)}
              className="action-button"
            >
              Search
            </button>
          </div>
          {bookAvailable && (
            <button
              onClick={() => handleBookSelection(bookId)}
              className="action-button"
            >
              Issue
            </button>
          )}
          {!bookAvailable && <div className="error">Book is not available</div>}
        </div>
      )}

      {selectedAction === "return" && (
        <div>
          <div className="book-input">
            <label htmlFor="bookId">Book ID:</label>
            <input
              type="text"
              id="bookId"
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
            />
            <button
              onClick={() => searchBookAvailability(bookId)}
              className="action-button"
            >
              Search
            </button>
          </div>
          {bookAvailable && (
            <button
              onClick={() => handleBookReturn(bookId)}
              className="action-button"
            >
              Return
            </button>
          )}
          {!bookAvailable && <div className="error">Book is not available</div>}
        </div>
      )}
    </div>
  );
}

export default IssueReturn;
