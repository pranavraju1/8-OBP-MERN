// https://jsonplaceholder.typicode.com/posts/1

// async function fetchData() {
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         const data = await res.json();
//         console.log(data)
//     }catch(error){
//         console.log(error);
//     }
// }
// fetchData()


import axios from "axios";

async function fetchData() {
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        console.log(res.data)
    }catch(error){
        console.log(error);
    }
}
fetchData()