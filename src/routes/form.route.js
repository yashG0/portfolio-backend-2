import { Router } from "express";
import { setForm } from "../controllers/formcontroller.js";

const formRoutes = Router();

formRoutes.post("/", setForm)

export default formRoutes;