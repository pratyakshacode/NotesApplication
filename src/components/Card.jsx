import axios from "axios";
import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ title, description, time, _id }) => {
  const formattedDate = new Date(time).toLocaleString();
   const [open, setOpen] = useState(false);
  const deleteNote = async () => {

    const response = await axios.delete(`http://localhost:3000/api/note/${_id}`);
    const data = response.data
    console.log(data);

    window.location.reload();

  }

  return (
    <div
      style={{
        width: "320px",
        padding: "16px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: "18px",
          fontWeight: "600",
          color: "#222",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: "14px",
          color: "#555",
          lineHeight: "1.5",
        }}
      >
        {description}
      </p>

      <span
        style={{
          marginTop: "8px",
          fontSize: "12px",
          color: "#888",
        }}
      >
        {formattedDate}
      </span>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
            <button onClick={() => setOpen(true)} style={{ background: '#0ab163', borderRadius: 10 }} >Update Note</button>
            <button onClick={deleteNote} style={{ background: '#ff1224', borderRadius: 10 }}>Delete Note</button>
        </div>
        <Modal 
            isOpen={open} 
            onClose={() => setOpen(false)}  
            note={{
                _id,
                title,
                description,
            }}
        />
    </div>
  );
};

export default Card;