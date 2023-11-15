import { useState } from "react";
import "./styles/admin.css";

const LibrarianList = ({ librarians }) => {
  return (
    <div className="librarian-list">
      <h2>List of Librarians</h2>
      <ul>
        {librarians.map((librarian, index) => (
          <li key={index}>{librarian.name}</li>
        ))}
      </ul>
    </div>
  );
};

const AddLibrarian = ({ addLibrarian }) => {
  const [newLibrarian, setNewLibrarian] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newLibrarian.trim()) {
      addLibrarian(newLibrarian);
      setNewLibrarian("");
    }
  };

  return (
    <div className="add-librarian">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter librarian's name"
          value={newLibrarian}
          onChange={(e) => setNewLibrarian(e.target.value)}
        />
        <button type="submit">Add Librarian</button>
      </form>
    </div>
  );
};

const GeneratePassword = ({ generatePassword }) => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const password = generatePassword();
    setGeneratedPassword(password);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
  };

  return (
    <div className="generate-password">
      <button onClick={handleGenerate}>Generate Password</button>
      {generatedPassword && (
        <div>
          <p>Password: {generatedPassword}</p>
          <button onClick={copyToClipboard}>
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
        </div>
      )}
    </div>
  );
};

function Admin() {
  const [librarians, setLibrarians] = useState([]);
  const [showAddLibrarian, setShowAddLibrarian] = useState(false);
  const [showGeneratePassword, setShowGeneratePassword] = useState(false);

  const handleAddLibrarian = (name) => {
    const newLibrarian = { name };
    setLibrarians([...librarians, newLibrarian]);
    setShowGeneratePassword(true);
  };

  const handleGeneratePassword = () => {
    const passwordLength = 8;
    const password = Math.random().toString(36).slice(-passwordLength);
    return password;
  };

  const toggleAddLibrarian = () => {
    setShowAddLibrarian(!showAddLibrarian);
    setShowGeneratePassword(false);
  };

  return (
    <div className="admin">
      <LibrarianList librarians={librarians} />
      <button className="add-lib-button" onClick={toggleAddLibrarian}>
        {showAddLibrarian ? "Hide Add Librarian" : "Add Librarian"}
      </button>
      {showAddLibrarian && <AddLibrarian addLibrarian={handleAddLibrarian} />}
      {showGeneratePassword && (
        <GeneratePassword generatePassword={handleGeneratePassword} />
      )}
    </div>
  );
}

export default Admin;
