import { useState } from "react";
import "./styles/issueReturn.css";

function IssueReturn() {
  const [userId, setUserId] = useState("");
  const [isValidUser, setIsValidUser] = useState(true);
  const [selectedAction, setSelectedAction] = useState("");
  const [bookAvailable, setBookAvailable] = useState(true);
  const [issueBook, setBook] = useState({
    member_id: "",
    book_id: ""
  });
  console.log("1",issueBook)
  const  handleBookSelection = async()=> {
      try {
        const body = issueBook ;
        console.log(body);
        const val = await fetch("http://localhost:5000/api/isr/issue", {
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
      console.log(issueBook );

      // window.location.reload(false)
    }
  

  const  handleBookReturn = async()=> {
    // Implement logic to return the book
    try {
      const body = issueBook ;
      console.log(body);
      const val = await fetch("http://localhost:5000/api/isr/returnBook", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log("On submit",val);
      console.log(issueBook )
     
    } catch (err) {
      console.error(err.message);
    }
    console.log(issueBook );

    // window.location.reload(false)

    
  }

  function validateUser() {
    // Implement logic to validate the user
    console.log(issueBook)
    setIsValidUser(true);
  }

  function searchBookAvailability(bookId) {
    // Implement logic to search book availability
    setBookAvailable(true);
  }

  return (
    <div className="container">
      <h2>Issue and Return Books</h2>
      {/* <div className="user-input">
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          value={issueBook.member_id}
          onChange={(e) => setBook({ ...issueBook.member_id, member_id: e.target.value })}
          
        />
        <button onClick={validateUser} className="action-button">
          Validate
        </button>
      </div> */}

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
          <label htmlFor="userId" className="user-input">User ID:</label>
        <input
          type="text"
          id="userId"
          value={issueBook.member_id}
          onChange={(e) => setBook({ ...issueBook, member_id: e.target.value })}
          
        />
          <div className="book-input">
            <label htmlFor="bookId">Book ID:</label>
            <input
              type="text"
              id="bookId"
              value={issueBook.book_id}
              onChange={(e) => setBook({ ...issueBook, book_id: e.target.value })}
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
              onClick={() => handleBookSelection()}
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
        <label htmlFor="userId" className="user-input">User ID:</label>
        <input
          type="text"
          id="userId"
          value={issueBook.member_id}
          onChange={(e) => setBook({ ...issueBook.member_id, member_id: e.target.value })}
          
        />
        <div className="book-input">
          <label htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            value={issueBook.book_id}
            onChange={(e) => setBook({ ...issueBook.book_id, book_id: e.target.value })}
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
            onClick={() => handleBookReturn()}
            className="action-button"
          >
            Issue
          </button>
        )}
        {!bookAvailable && <div className="error">Book is not available</div>}
      </div>
      )}
    </div>
  );
}

export default IssueReturn;
