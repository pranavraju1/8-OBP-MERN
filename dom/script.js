// console.log(document.URL)
// console.log(document.head)
// console.log(document.body)
// console.log(document.body.children[0])
// console.log(document)



//querySelector -> returns the 1st element that matches
// the specified css selector

// console.log(document.querySelector("h1"))
// console.log(document.querySelector(".heading"))
// console.log(document.querySelector("#idhead"))


// querySelectorAll -> returns all the elements
// that matches the CSS selector as a Node List
// console.log(document.querySelectorAll('h1')[2]);

// console.log(document.querySelector("#idhead").textContent)

// document.querySelectorAll('h1').forEach(item => 
//     console.log(item.textContent)
// )

// let headelements = document.querySelectorAll('h1');
// for(let i=0; i< headelements.length; i++){
//     console.log(headelements[i].textContent)
// }

// only targeting .featured elements inside .posts
// console.log(document.querySelectorAll('.posts .featured'))



// using textContent you can access and update the text
// inside a component
// document.querySelector('h1').textContent = "hello new world"


// task change post 2 -> new post 0
// task change post 3 -> new post 1
// task change post 5 -> new post 2

// const posts = document.querySelectorAll('.posts .featured');

// posts.forEach((item, idx)=>{
//     item.textContent = `new post ${idx}`
// })

// for(let i=0; i<posts.length; i++){
//     posts[i].textContent = `new post ${i}`
// }

// Note this gives me all the text inside the element
// console.log(document.querySelector('.posts').textContent)


// innerHtml -> gets and sets the HTML content inside the element
// console.log(document.querySelector('.posts').innerHTML);
// document.querySelector('.posts').innerHTML = `<h1>testing innerHTML</h1>`;
// document.querySelector('.posts').innerHTML = "";


// document.querySelector('.list').innerHTML = '<li>item 1</li>'

// for(let i=1; i<=5; i++){
//     // document.querySelector('.list').innerHTML = '<li>item 1</li> <li>item 2</li> <li>item 3</li> <li>item 4</li>'
//     document.querySelector('.list').innerHTML += `<li>item ${i}</li>`
// }


// Note:
// when you want to update the text use textContent ans
//  when you want to update the HTML use innerHTML

// textContent is faster than innerHTML -> in innerHTML the HTML tags are parsed and 
// rendered again to display the updated HTML
