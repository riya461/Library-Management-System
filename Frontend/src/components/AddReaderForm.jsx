import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import "./styles/addReaderForm.css";

const AddReaderForm = ({ onAddReader, onClose }) => {
  const [newReader, setNewReader] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReader((prevReader) => ({ ...prevReader, [name]: value }));
  };

  const generateReaderId = () => {
    // Placeholder logic, replace it with your own logic to generate unique IDs
    return 1026; // Just a static ID for now
  };

  const handleAddReader = () => {
    // Perform validation if needed

    // Generate a reader ID
    const readerId = generateReaderId();

    // Add the ID to the newReader object
    const newReaderWithId = { ...newReader, id: readerId };

    // Call the parent component's function to add the new reader
    onAddReader(newReaderWithId);

    // Close the form
    onClose();

    // Show the alert with the generated reader ID
    alert(`Reader ID: ${readerId}`);
  };

  return (
    <div className="readers-add-form">
      <div className="form-header">
        <h2>Add New Reader</h2>
        <button className="close-button" onClick={onClose}>
          <IoCloseSharp />
        </button>
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newReader.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={newReader.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={newReader.address}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={newReader.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <button className="center-align-button" onClick={handleAddReader}>
        Add Reader
      </button>
    </div>
  );
};

export default AddReaderForm;
