import express from "express";
const app = express();
const PORT = 3000;

// this how we create a global middleware
app.use(express.json());

// this is how you start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

const movies = [
  {id:1, title: 'Inception', genre: 'Sci-Fi', watched: true},
  {id:2, title: 'Interstellar', genre: 'Sci-Fi', watched: true},
  {id:3, title: 'ZNMD', genre: 'drama', watched: true},
  {id:4, title: 'Koi Mil Gaya', genre: 'Sci-Fi', watched: true},
]

let AdminEmail = "admin@gmail.com";
let AdminPassword = "adminPassword";

// for the below dynamic route fetch all the movies in that genre
app.get('/movies/:genre', (req, res)=>{
  const {genre} = req.params;
  const filteredMovies = movies.filter(item => item.genre.toLowerCase() == genre)
  console.log(filteredMovies)
  res.json(filteredMovies)
})

// POST

app.post("/login", (req, res)=>{

  // const email = req.body.email; 
  // const password = req.body.password; 
  const {email} = req.body; 
  const {password} = req.body;
  if(email == AdminEmail && password == AdminPassword){
    res.status(201).json({message: "admin login successful"})
  }else{
    res.status(400).json({message: "wrong credentials"})
  }
  
  
})


// get movie details from postman and insert it inside movies array
// in response send the whole movies array to check
app.post("/movies", (req, res)=>{

  const {title, genre, watched} = req.body;
  // let obj = {
  //   id: movies.length+1,
  //   title: title,
  //   genre: genre,
  //   watched: watched
  // }

  // OR

  let obj = { id: movies.length+1, title, genre, watched }

  movies.push(obj)

  res.json(movies)
})


//for the below route if the movie with that id exists send the name of that movie as response
// and if it does not then send an error message with the appropriate status code 
app.get("/getmovies/:id", (req, res)=>{
  const {id} = req.params;
  // const filteredMovies =  movies.filter(item => item.id == id)
  // if(filteredMovies.length == 0){
  //   res.status(404).send("movie does not exits")
  // }else{
  //   res.status(200).send(filteredMovies[0].title)
  // }

    // OR
    
  const movie =  movies.find(item => item.id == id)
  if(!movie){
    res.status(404).send("movie does not exits")
  }else{
    res.status(200).send(movie.title)
  }
})