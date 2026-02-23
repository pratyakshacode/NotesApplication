
import express from 'express'
import path from 'path';
import url from 'url';
import cors from 'cors';
import { connectDB } from '../db/connect.js';
import authRouter from '../routes/authRouter.js';
import notesRouter from '../routes/notesRouter.js';

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, '../../dist')));
app.use(express.json()); // important for parsing JSON request bodies
app.use(cors({
    origin: true,
    credentials: true
}))

connectDB();

// Registration of routers

app.use('/api/auth', authRouter);
app.use('/api/note', notesRouter);

const PORT = 3000;

app.use('/api/auth', authRouter);
app.use('/api/note', notesRouter);

// Catch-all route for React Router
app.get('/*name', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
});