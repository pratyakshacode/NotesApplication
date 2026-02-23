import React, { useState } from "react";
import axios from "axios";

const Modal = ({ isOpen, onClose, note, onUpdateSuccess }) => {

  const [title, setTitle] = useState(note?.title || "");
  const [description, setDescription] = useState(note?.description || "");

  if (!isOpen) return null;

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/note/${note._id}`,
        { title, description }
      );

      onUpdateSuccess(response.data); // send updated note to parent
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Update Note</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={inputStyle}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          style={inputStyle}
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputStyle = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

export default Modal;