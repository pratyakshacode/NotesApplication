import { Router } from "express";
import { createNotes } from "../controller/createNotes.js";
import { getAllNotes } from "../controller/getAllNotes.js";

const notesRouter = Router();

notesRouter.get('/', getAllNotes);
notesRouter.post('/', createNotes);

export default notesRouter;