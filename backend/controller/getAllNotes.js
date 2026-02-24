import { Note } from "../models/Note.js";

export const getAllNotes = async (req, res) => {

    try {

        const user = req.user;
        const userId = user.id;

        const query = {
            isDeleted: { $ne : true },
            createdBy: userId
        }

        const allNotes = await Note.find(query);


        return res.status(200).json({
            status: "SUCCESS",
            message: "Notes fetched successfully",
            data: allNotes
        });

    } catch (error) {
        console.error("Error in getAllNotes", error);
        return res.status(500).json({
            status: "INTERNAL_SERVER_ERROR",
            message: "Error in getting all notes."
        })
    }
}