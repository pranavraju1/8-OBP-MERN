import express from  "express";
import connectDB from "./db.js";
import 'dotenv/config'

// OR
// import dotenv from "dotenv";
// dotenv.config()


const app = express();
connectDB();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send("API is working")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})
