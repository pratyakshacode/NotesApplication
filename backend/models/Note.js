import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description : {
        type: String
    },
    time: {
        type: Date
    }
}, { timestamps: true });

export const Note = mongoose.model('note', notesSchema);