import { Router } from "express";
import { createNotes } from "../controller/createNotes.js";
import { getAllNotes } from "../controller/getAllNotes.js";
import { deleteNode } from "../controller/deleteNote.js";
import { updateNotes } from "../controller/updateNotes.js";
import { authenticateUser } from "../middleware/authenticateUser.js";

const notesRouter = Router();

notesRouter.get('/', authenticateUser, getAllNotes);
notesRouter.post('/', authenticateUser, createNotes);
notesRouter.put('/:noteId', authenticateUser,  updateNotes);
notesRouter.delete('/:noteId', authenticateUser, deleteNode);

export default notesRouter;