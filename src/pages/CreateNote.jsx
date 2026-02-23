import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState('');

  const navigate = useNavigate()

  const createNote = async () => {
    try {
        
        const response = await axios.post('http://localhost:3000/api/note', {
            title, description, time
        });

        console.log(response.data);
        navigate('/note/all');


      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="register-container">
      <h2>Create Note</h2>


      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        placeholder="Enter Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={createNote}>Create Note</button>
    </div>
  );
};

export default CreateNote;