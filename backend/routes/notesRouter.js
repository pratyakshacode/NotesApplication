import { Router } from "express";
import { createNotes } from "../controller/createNotes.js";
import { getAllNotes } from "../controller/getAllNotes.js";
import { deleteNode } from "../controller/deleteNote.js";

const notesRouter = Router();

notesRouter.get('/', getAllNotes);
notesRouter.post('/', createNotes);
notesRouter.delete('/:noteId', deleteNode);

export default notesRouter;