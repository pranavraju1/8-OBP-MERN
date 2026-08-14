import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    course: {
        type: String,
        required: true,
    }
})

const Test = mongoose.model("Test", testSchema);


const connectDB = async() => {
    try{
        
        mongoose.connection.on('connected', ()=>{
            console.log("Db is connected")
        })

        await mongoose.connect(`${process.env.MONGO_URL}/test`);


        // const result = await Test.create({
        //     name: "test name",
        //     age: "5",
        //     course: "Test Course"
        // })

        // const result = await Test.insertMany([
        //     {name: "pranav", age: 20, course: 'BTech'},
        //     {name: "sourav", age: 50, course: 'BCom'},
        //     {name: "meghna", age: 60, course: 'MTech'},
        //     {name: "tara", age: 70, course: 'BSC'},
        //     {name: "manu", age: 40, course: 'BSC'},
        // ])


        // console.log(result);

        console.log(await Test.find({}));
        // console.log(await Test.find({_id: "6a7eac73b6c99297895032d7"}));


        // const result = await Test.updateOne({name:"pranav"},
        //     {
        //         $set:{
        //             age: 25,
        //             course: "MTech"
        //         }
        //     }
        // )

        const result = await Test.deleteOne({_id: "6a7eac73b6c99297895032d7"});


        console.log(result);





    }catch(err){
        console.log(err.message)
    }

}

export default connectDB;

