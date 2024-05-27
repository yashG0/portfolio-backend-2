import { Router } from "express";
import { getProject } from "../controllers/project.controller.js";

const projectRoutes = Router();

projectRoutes.get("/", getProject);

export default projectRoutes;