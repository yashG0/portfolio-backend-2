import mongoose from "mongoose"
import { Form } from "../models/form.model.js"

export const setForm = async(req, res) => {
    try {
        const newForm = await Form.create(req.body);
        return res.status(200).json({ success: true, data: newForm, message: "data saved Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

