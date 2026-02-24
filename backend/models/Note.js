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
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, { timestamps: true });

export const Note = mongoose.model('note', notesSchema);