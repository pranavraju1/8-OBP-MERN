import express from "express";
const app = express();
const PORT = 3000;

// this how we create a global middleware
app.use(express.json());

// this is how you start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})


