// DEPENDENCIES OR IMPORTs ->
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import formRoutes from './routes/form.route.js';
import projectRoutes from './routes/project.route.js';
import connectToDatabase from './db/main.js';

dotenv.config();

// SETTING CONSTANTS ->
const app = express();
const PORT = process.env.PORT || 3500;
const corsOptions = {
    origin: "https://portfolio-frontend-alpha-henna.vercel.app",
    optionsSuccessStatus: 200,
    credentials: true
};

// USING MIDDLEWARES ->
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/form", formRoutes);
app.use("/api/project", projectRoutes);

// ROOT ->
app.get("/", (req, res) => {
    res.send("Portfolio Manager Backend Working Successfully.");
});

// DATABASE CONNECTION ->
connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Your Server is running at http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error("Database connection error:", err.message);
});
