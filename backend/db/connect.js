import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://root:root@mycluster.lrhlqng.mongodb.net/NotesApplication');
        console.log("Mongodb connected")
    } catch (error) {
        console.error("Error in connecting mongodb", error);
    }
}