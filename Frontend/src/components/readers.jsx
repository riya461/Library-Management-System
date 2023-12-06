import { useState, useEffect } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import ReaderDetails from "./ReaderDetails"; // Assuming the correct filename
import "./styles/readers.css";

const Readers = () => {
  // Hard-coded details for 25 readers
  
  const emptyReaders = [

  ];

  const [readers, setReaders] = useState(emptyReaders);
  const [selectedReader, setSelectedReader] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
const runAgain = async () => {
  fetch("http://localhost:5000/api/members/getReader")
     .then(res => res.json())
     .then(
       (result) => {
         setReaders(result);
         console.log(result);
       })
       }


  useEffect(() => {
    fetch("http://localhost:5000/api/members/getReader")
     .then(res => res.json())
     .then(
       (result) => {
         setReaders(result);
         console.log(result);
       })
       },[]);

  const handleReaderClick = (reader) => {
    setSelectedReader(reader);
  };

  

  
  const handleSearch = () => {
    // Implement your search logic
    // For example, filter readers based on the search term
    const filteredReaders = readers.filter((reader) =>
      reader.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setReaders([...filteredReaders]); // Use spread operator to create a new array
  };
  const [newMember, setNewReader] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });
  
  const onSubmitAdd = async () => {
    try {
      const body = newMember;
      console.log(body);
      const val = await fetch("http://localhost:5000/api/members/addReader", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log("On submit",val);
      console.log(newMember);
      console.log(newMember)
      runAgain();
    } catch (err) {
      console.error(err.message);
    }
  };
  
  const handleAddReader = () => {
    // // Set "Books Borrowed" to 0 for the new reader
    // const readerWithZeroBooksBorrowed = { ...newReader, booksBorrowed: 0 };

    // // Add the new reader to the state
    // setReaders([...readers, readerWithZeroBooksBorrowed]);

    // // Close the add form

    console.log("On handle",newMember);
    onSubmitAdd();
    setShowAddForm(false);
    // runAgain();
  };


  return (
    <main className="readers-main-container">
      <div className="readers-search-container">
        <input
          type="text"
          placeholder="Search readers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="readers-search-icon-container" onClick={handleSearch}>
          <BsSearch className="readers-search-icon" />
        </div>
      </div>
      <div className="readers-title-actions">
        <h3>READERS</h3>
        <div className="readers-buttons-container">
          <button
            className="readers-add-reader-button"
            onClick={() => setShowAddForm(true)}
          >
            <BsPlus /> Add New Reader
          </button>
        </div>
      </div>
      <div className="readers-table">
        <table>
          <thead>
            <tr>
              <th>Reader ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Books Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {readers.map((reader) => (
              <tr key={reader.id} onClick={() => handleReaderClick(reader)}>
                <td>{reader.member_id}</td>
                <td>{reader.name}</td>
                <td>{reader.email}</td>
                <td>{reader.booksBorrowed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedReader && (
        <ReaderDetails
          reader={selectedReader}
          onClose={() => setSelectedReader(null)}
        />
      )}
      {showAddForm && (
        <div className="booklist-add-form" >
        <div className="form-header" >
          <h3>Add New Reader</h3>
          <button
            className="close-button"
            onClick={() => setShowAddForm(false)}
          >
            <IoCloseSharp />
          </button>
        </div>

        
        <label>Name:</label>
        <input
          type="text"
          value={newMember.name}
          onChange={(e) => setNewReader({ ...newMember, name: e.target.value })}
        />

        <label>Email :</label>
        <input
          type="email"
          value={newMember.email}
          onChange={(e) => setNewReader({ ...newMember, email: e.target.value })}
        />

        
        <label>Address:</label>
        <input
          type="text"
          value={newMember.address}
          onChange={(e) =>
            setNewReader({ ...newMember, address: e.target.value })
          }
        />
         <label>Phone Number:</label>
        <input
          type="number"
          value={newMember.phoneNumber}
          onChange={(e) =>
            setNewReader({ ...newMember, phoneNumber: e.target.value })
          }
        />
        <button className="center-align-button" 
        onClick={handleAddReader}
        >
          Add Reader
        </button>
      </div>
    )
      }
    </main>
  );
};

export default Readers;
