// console.log(document.querySelector('#elem'))

// console.log(document.getElementById('elem'))
// console.log(document.getElementsByClassName('classElement'))
// console.log(document.getElementsByClassName('classElement')[2])


// let element = document.getElementById('element');
// element.style.color = 'blue';
// element.style.backgroundColor = 'aqua';



// closest -> searches for its parent, grandparent, ancestors
// let chapter = document.querySelector('.chapter');
// console.log(chapter.closest('.book')) // book element
// console.log(chapter.closest('div')) //book element
// console.log(chapter.closest('.contents')) //contents element
// console.log(chapter.closest('h1')) //null bc its not a ancestor

// console.log(document.querySelector(".contents").id)
// console.log(document.querySelector(".contents").className)
// let contents = document.querySelector(".contents");
// contents.id = 'newID';
// console.log(document.querySelector(".contents").id);
// contents.className = 'wraper newClass'
// console.log(document.querySelector(".wraper").className)

// let img = document.querySelector('img');
// // img.src = "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// img.alt = "Dog image"


// classList -> gives a list of class and multiple 
// methods that can be attached to this list
// console.log(document.querySelector(".contents").classList)
// let contents = document.querySelector(".contents").classList;
// contents.add('newClass');   //add className
// contents.remove('newClass');    //removing className
// contents.toggle('active');  //togglx`e className
// console.log(contents.contains('container'));    //checks if the className exists


// getAttribute, setAttribute
// let img = document.querySelector('img');
// console.log(img.getAttribute('src'));
// console.log(img.getAttribute('alt'));
// img.setAttribute('src', 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
// img.setAttribute('alt', 'Dog img');

// let boxContainer = document.querySelector('.box-container');

// let div = document.createElement('div');
// div.style.height="200px";
// div.style.width="200px";
// div.style.backgroundColor="red";
// div.className = "box"
// boxContainer.appendChild(div);

// let p = document.createElement('p');
// p.textContent='asdasdasdasd'
// boxContainer.appendChild(p);


// let fruits = ['apple', 'banana', 'kiwi', 'orange'];
// let ul = document.querySelector('ul');

// fruits.map((item)=>{
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);
// });

let users = [
    {id:1, name:"pranav"},
    {id:2, name:"sourav"},
    {id:3, name:"anjali"},
    {id:4, name:"meghna"},
    {id:5, name:"rahul"},
]

// make the below table using JS and the data given above
// id    name
// 1    pranav
// 2     sourav
// 3     anjali
// 4    meghna
// 5    rahul


// let table = document.querySelector('table');


// users.map(item=>{
//   let tr = document.createElement('tr');
//   let td1 =  document.createElement('td');
//   td1.textContent = item.id;
//   let td2 =  document.createElement('td');
//   td2.textContent = item.name;

//   tr.appendChild(td1);
//   tr.appendChild(td2);
//   table.appendChild(tr);
// })

let ul = document.querySelector("ul")
let li = document.createElement("li");
let p = document.createElement("p")
p.textContent = "Pranav"

li.textContent = "Banana"
ul.append(li) //adds at the end
// ul.prepend(li)  //adds at the start
ul.before(p) //before sibling element
// ul.after(p) //after sibling element


// Deletion of an element in DOM
ul.remove();