import { useState, useEffect } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import AddReaderForm from "./AddReaderForm"; // Assuming the correct filename
import ReaderDetails from "./ReaderDetails"; // Assuming the correct filename
import "./styles/readers.css";

const Readers = () => {
  // Hard-coded details for 25 readers
  const hardCodedReaders = [
    {
      id: 1001,
      name: "Harry Potter",
      email: "harry@example.com",
      booksBorrowed: 2,
    },
    {
      id: 1002,
      name: "Hermione Granger",
      email: "hermione@example.com",
      booksBorrowed: 3,
    },
    {
      id: 1003,
      name: "Ron Weasley",
      email: "ron@example.com",
      booksBorrowed: 1,
    },
    {
      id: 1004,
      name: "Albus Dumbledore",
      email: "albus@example.com",
      booksBorrowed: 0,
    },
    {
      id: 1005,
      name: "Severus Snape",
      email: "severus@example.com",
      booksBorrowed: 1,
    },
    {
      id: 1006,
      name: "Luna Lovegood",
      email: "luna@example.com",
      booksBorrowed: 2,
    },
    {
      id: 1007,
      name: "Sirius Black",
      email: "sirius@example.com",
      booksBorrowed: 0,
    },
    {
      id: 1008,
      name: "Ginny Weasley",
      email: "ginny@example.com",
      booksBorrowed: 1,
    },
    {
      id: 1009,
      name: "Nymphadora Tonks",
      email: "tonks@example.com",
      booksBorrowed: 3,
    },
    {
      id: 1010,
      name: "Fred Weasley",
      email: "fred@example.com",
      booksBorrowed: 2,
    },
    {
      id: 1011,
      name: "George Weasley",
      email: "george@example.com",
      booksBorrowed: 2,
    },
    { id: 1012, name: "Dobby", email: "dobby@example.com", booksBorrowed: 1 },
    {
      id: 1013,
      name: "Lucius Malfoy",
      email: "lucius@example.com",
      booksBorrowed: 0,
    },
    {
      id: 1014,
      name: "Bellatrix Lestrange",
      email: "bellatrix@example.com",
      booksBorrowed: 1,
    },
    {
      id: 1015,
      name: "Remus Lupin",
      email: "remus@example.com",
      booksBorrowed: 2,
    },
    { id: 1016, name: "Cho Chang", email: "cho@example.com", booksBorrowed: 1 },
    {
      id: 1017,
      name: "Cedric Diggory",
      email: "cedric@example.com",
      booksBorrowed: 0,
    },
    {
      id: 1018,
      name: "Arthur Weasley",
      email: "arthur@example.com",
      booksBorrowed: 3,
    },
    {
      id: 1019,
      name: "Neville Longbottom",
      email: "neville@example.com",
      booksBorrowed: 1,
    },
    {
      id: 1020,
      name: "Molly Weasley",
      email: "molly@example.com",
      booksBorrowed: 2,
    },
    {
      id: 1021,
      name: "Draco Malfoy",
      email: "draco@example.com",
      booksBorrowed: 0,
    },
    {
      id: 1022,
      name: "Lily Potter",
      email: "lily@example.com",
      booksBorrowed: 1,
    },
    {
      id: 1023,
      name: "James Potter",
      email: "james@example.com",
      booksBorrowed: 2,
    },
    {
      id: 1024,
      name: "Dolores Umbridge",
      email: "umbridge@example.com",
      booksBorrowed: 0,
    },
    {
      id: 1025,
      name: "Viktor Krum",
      email: "viktor@example.com",
      booksBorrowed: 1,
    },
  ];

  const emptyReaders = [

  ];

  // const [readers, setReaders] = useState(hardCodedReaders);
  const [readers, setReaders] = useState(emptyReaders);
  const [selectedReader, setSelectedReader] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [newMember, setNewMember] = useState({
    id: 0,
    name: "",
    email: "",
    booksBorrowed: 0,
  });

  const fetchReaders = () => {
    // Implement your logic to fetch readers and update the state
    // const fetchedReaders = ...;
    // setReaders(fetchedReaders);
  };

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

  const addMemberVal = () => {
    fetch("http://localhost:5000/api/Members/getReaders")
      .then(res => res.json())
      .then(
        (result) => {
          setReaders(result);
          console.log(result);
        })
        }

  const onSubmitAdd = async () => {
    try {
      const body = {newMember};
      console.log(body);
      const val = await fetch("http://localhost:5000/api/members/addReader", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log("On submit",val);
      console.log(newMember);
      setShowAddForm(false);
      addMemberVal();

      console.log(newMember)
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleAddReader = (newReader) => {
    // // Set "Books Borrowed" to 0 for the new reader
    // const readerWithZeroBooksBorrowed = { ...newReader, booksBorrowed: 0 };

    // // Add the new reader to the state
    // setReaders([...readers, readerWithZeroBooksBorrowed]);

    // // Close the add form
    // setShowAddForm(false);

    console.log("On handle",newMember);
    onSubmitAdd();
  };

  const handleSearch = () => {
    // Implement your search logic
    // For example, filter readers based on the search term
    const filteredReaders = readers.filter((reader) =>
      reader.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setReaders([...filteredReaders]); // Use spread operator to create a new array
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
        <AddReaderForm
          onAddReader={handleAddReader}
          onClose={() => setShowAddForm(false)}
        />
      )}
    </main>
  );
};

export default Readers;
