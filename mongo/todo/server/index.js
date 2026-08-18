import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import todoRouter from "./routes/todoRoutes.js";


const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

// this how we create a global middleware
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173" //giving access to my react project
}))


app.use("/todo", todoRouter)


// this is how you start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})


