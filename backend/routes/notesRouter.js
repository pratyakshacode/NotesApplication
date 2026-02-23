import { Router } from "express";
import { createNotes } from "../controller/createNotes.js";
import { getAllNotes } from "../controller/getAllNotes.js";
import { deleteNode } from "../controller/deleteNote.js";
import { updateNotes } from "../controller/updateNotes.js";

const notesRouter = Router();

notesRouter.get('/', getAllNotes);
notesRouter.post('/', createNotes);
notesRouter.put('/:noteId', updateNotes);
notesRouter.delete('/:noteId', deleteNode);

export default notesRouter;