// DEPENDANCIES OR IMPORTs ->
import dotenv from 'dotenv';
import app from "./app.js";
import express from "express";
import formRoutes from "./routes/form.route.js";
import projectRoutes from './routes/project.route.js';

// import connectToDatabase from "./dbConfig/db.js";
import cors from "cors";
import connectToDatabase from './db/main.js';


// SETTING CONSTANTS ->
app.use(cors({ credentials: true, origin: true }));
dotenv.config();
const PORT = process.env.PORT || 3500;
const corsOptions = {
    origin: "https://portfolio-frontend-alpha-henna.vercel.app",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};


// USING MIDDLEWARES ->
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/form", formRoutes);
app.use("/api/project", projectRoutes);
app.use(cors(corsOptions));


// ROOT ->
app.get("/", (req, res) => {
    res.send("Portfolio Manager Backend Working Successfully.")
})


// DATABASE CONNECTION ->
connectToDatabase().then(() => {
    // console.log("Database Connected Successfully");
    app.listen(PORT, () => {
        console.log(`Your Server is running at http://localhost:${PORT}`);
    })
}).catch((err) => {
    console.error("ERR ", err.message);
})
