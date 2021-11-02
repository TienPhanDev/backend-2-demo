const movies = require('./db.json');
let globalId = 11;

module.exports = {
  // getMovies should send a 200 code and movies array
  // to frontend in the response
  getMovies: (req, res) => {
    res.status(200).send(movies);
  },
  // Write a method called deleteMovie which takes in params
  // movieId and finds that movie and deletes it. Send back
  // a 200 code and `user was successfully deleted`
  deleteMovie: (req, res) => {
    let movieIndex = movies.findIndex((movie) => movie.id === parseInt(req.params.id));
    movies.splice(movieIndex, 1);
    res.status(200).send(movies);
  },
  // Write a method called createMovie that takes in `req.body` and 
  // create a new object with those req.body properties.
  // Then push the new object into the movies array and send back
  // 200 code and the movies list array. Then increase globalId +1.
  createMovie: (req, res) => {
    let { title, rating, imageURL } = req.body;
    
    let newMovie = {
      id: globalId,
      title: title,
      rating: rating,
      imageURL: imageURL
    };

    movies.push(newMovie);
    res.status(200).send(movies)
    globalId++
  },
  // Write out a method called `updateMovie` that 
  // take in the `req` object and finds the correct movie 
  // in movies array and updates properties correctly. 
  // Then send back a 200 code and the movies list 
  updateMovie: (req, res) => {
    let requestId = req.params.id;
    let movieIndex = movies.findIndex((movie) => movie.id === parseInt(req.params.id))
    
    if (req.body.type === "plus") {
      movies[movieIndex].rating++
    } else if (req.body.type === "minus") {
      movies[movieIndex].rating--
    }
    res.status(200).send(movies);
  }
};