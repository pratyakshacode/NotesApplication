import { Note } from "../models/Note.js";

export const deleteNode = async (req, res) => {
    try {

        const user = req.user;
        const userId = user.id;

        const { noteId } = req.params;

        const note = await Note.findById(noteId);

        const author = note.createdBy;

        if(author !== userId) {
            return res.status(403).json({
                status: "FORBIDDEN",
                message: "You are not allowed to delete this note."
            })
        }
        const doc = await Note.findByIdAndUpdate(noteId, { isDeleted: true });

        if(doc) {
            return res.status(200).json({
                status: "SUCCESS",
                message: "Note Deleted"
            });
        }
        else {
            return res.status(404).json({
                status: "NOT_FOUND",
                message: 'No Note Found With Given Id'
            })
        }
    }
    catch(error) {
        console.error("error in deleteNote", error);
        return res.status(500).json({
            status: "INTERNAL_SERVER_ERROR",
            message: "Error in deleting note"
        })
    }
}