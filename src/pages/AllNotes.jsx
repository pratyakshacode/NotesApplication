import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

const AllNotes = () => {

    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();
   

    useEffect(() => {

        const getAllNotes = async () => {
            const response = axios.get('http://localhost:3000/api/note');
            const data = (await response).data;
            setNotes(data.data);
        }
        getAllNotes()

    }, []);

  return (
    <div style={{ display: 'flex' , flexDirection: 'column', alignItems: 'center'}}>
        <h1 style={{ marginBottom: 20 }}>My Notes</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, padding: 20, flexWrap: 'wrap' }}>
            {
                notes.map((note) => {
                    return <Card {...note} />
                })
            }
        </div>
        <button 
            onClick={() => navigate('/note/create')}
            style={{ padding: 10, borderRadius: 10, background: 'rgba(0, 97, 153, 0.6)', color: 'white' }}>Create Note</button>

        
    </div>
  )
}

export default AllNotes