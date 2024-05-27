import { mongoose } from "mongoose";


const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    sourceCodeUrl: {
        type: String,
        required: true
    }
});

export const Project = mongoose.model("project", projectSchema);