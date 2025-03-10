import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/dbConnect.js";

dotenv.config({});

// connect database connection
connectDB();
const app = express();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`server is listing on port ${PORT}`);
})