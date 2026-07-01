// https://dummyjson.com/products
// task display list  of all the products (title) whos category is groceries
// <ul>
// <li> item 1</li>
// <li> item 2</li>
// <li> item 3</li>
// </ul>





// async function fetchData(){
//     try{
//         const res = await fetch("https://dummyjson.com/products");
//         const data = await res.json();
//         console.log(data)
//         render(data);
//     }catch(err){
//         console.log(err)
//     }
// }
// fetchData();
// const list = document.getElementById("list");

// function render(data){
//     let filteredData = data.products.filter((item)=> item.category === "groceries")
//     filteredData.map((item)=>{
//         let li = document.createElement("li");
//         li.textContent = item.title;
//         list.appendChild(li);
//     })
// }



// https://jsonplaceholder.typicode.com/posts
// POST -> creating data in DB
async function createPost(){
    const newPost = {
        title: "My first POST",
        body: "This is body",
        userId: 1
    }

    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    }) 

    const savedPost = await res.json();
    console.log("Created", savedPost);
}
createPost();

// PUT -> updating a field in DB
// async function updatePost(id) {
//     const updatedFields = {
//         title: "Updated title",
//         body: "Updated body"
//     }

//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
//         method: "PUT",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(updatedFields)
//     });

//     const data = await res.json();
//     console.log("Updated", data)
// }
// updatePost(1)


// // DELETE -> deleting data in DB
// async function  deletePost(id) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
//         method: "DELETE",
//     });
//     console.log(res)
//     if(res.ok){
//         console.log("Post deleted")
//     }else{
//         console.log("Post not deleted")
//     }
// }
// deletePost(1);