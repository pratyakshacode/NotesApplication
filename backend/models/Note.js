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
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const Note = mongoose.model('note', notesSchema);