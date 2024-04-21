//Import MODULES
import express from "express";
import mongoose from "mongoose";
import path from "path";
import 'dotenv/config';

//Import Functions


//Import Routes
import home from "./routes/home.js"


//Variables
const port = process.env.PORT || 80;
const databaseURL = process.env.DATABASE || NaN;
const app = express();


//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


//Routes
app.use("/", home);


//Starting server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


//Intervals & other