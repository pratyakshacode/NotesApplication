import { Note } from "../models/Note.js";

export const createNotes = async (req, res) => {
    try {

        const { title, description, time } = req.body;

        if(!title) {
            return res.status(400).json({
                status: "BAD_REQUEST",
                message: "Please provide the title for note."
            })
        }

        const createObj = { title, description: description ?? "" }

        if(time) {
            createObj['time'] = new Date(time);
        }

        const newNote = await Note.create(createObj);

        return res.status(200).json({
            status: "SUCCESS",
            message: "Note created successfully",
            data: newNote
        })

    } catch (error) {
        console.error("Error in createRouter", error);
        return res.status(500).json({
            status: "INTERNAL_SERVER_ERROR",
            message: "Error in creating notes."
        })
    }
}