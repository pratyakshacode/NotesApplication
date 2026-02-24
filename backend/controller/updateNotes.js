import { Note } from "../models/Note.js";

export const updateNotes = async (req, res) => {
    try {

        const { noteId } = req.params;
        const { title, description } = req.body;

        const user = req.user;
        const userId = user.id;

        if(!title) {
            return res.status(400).json({
                status: "BAD_REQUEST",
                message: "please provide the title"
            })
        }

        const note = await Note.findById(noteId);

        if(!note) {
            return res.status(404).json({
                status: "SUCCESS",
                message: "Note not found"
            })
        }

        const author = note.createdBy;

        if(author !== userId) {
            return res.status(403).json({
                status: "FORBIDDEN",
                message: "You are not allowed to update this note."
            })
        }

        const doc = await Note.findByIdAndUpdate(noteId, { title, description }, { new: true });

        if(doc) {
            return res.status(200).json({
                status: "SUCCESS",
                message: "Note updated successfully",
                data: doc
            })
        }
        else {
            return res.status(404).json({
                status: "NOT_FOUND",
                message: "Note doesn't exist with given id",
                data: {}
            })
        }
    } catch (error) {
        console.error("Error in updateNotes", error);
        return res.status(500).json({
            status: "INTERNAL_SERVER_ERROR",
            message: 'Error in updating the note'
        })
    }
}