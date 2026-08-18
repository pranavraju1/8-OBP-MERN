import mongoose from "mongoose";


import dns from "node:dns"; // 1. Import the built-in Node.js DNS module

// 2. Force Node.js to use Cloudflare's public DNS resolver
dns.setServers(["1.1.1.1", "1.0.0.1"]);


const connectDB = async() => {
    try{
        
        mongoose.connection.on('connected', ()=>{
            console.log("Db is connected")
        })

        await mongoose.connect(`${process.env.MONGO_URL}/todo`);



    }catch(err){
        console.log(err.message)
    }

}

export default connectDB;

