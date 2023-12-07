import { useState } from "react";
import "./styles/issueReturn.css";

function IssueReturn() {
  const [userId, setUserId] = useState("");
  const [isValidUser, setIsValidUser] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [bookId, setBookId] = useState("");
  const [bookAvailable, setBookAvailable] = useState(true);
  const [issueBook, setBook] = useState({
    member_id: "",
    book_id: ""
  });
  const  handleBookSelection = async()=> {
      try {
        const body = issueBook ;
        console.log(body);
        const val = await fetch("http://localhost:5000/api/members/addReader", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        console.log("On submit",val);
        console.log(issueBook );
        console.log(issueBook )
       
      } catch (err) {
        console.error(err.message);
      }
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
          value={issueBook.member_id}
          onChange={(e) => setBook({ ...issueBook.member_id, name: e.target.value })}
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
              value={issueBook.book_id}
              onChange={(e) => setBook({ ...issueBook.book_id, name: e.target.value })}
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
