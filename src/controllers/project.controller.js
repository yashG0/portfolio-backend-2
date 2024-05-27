import { Project } from "../models/project.model.js";

export const getProject = async (req, res) => {
    try {
        const projects = await Project.find();
        return res.status(200).json({ data: projects });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
} 