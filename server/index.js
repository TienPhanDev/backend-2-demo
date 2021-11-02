const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//const controller = require('./controller');
const {
  getMovies,
  deleteMovie,
  createMovie,
  updateMovie,
} = require("./controller");
// Write a axios GET method to '/api/movies'
app.get(`/api/movies`, getMovies);
app.delete(`/api/movies/:id`, deleteMovie);
app.post(`/api/movies`, createMovie);
app.put(`/api/movies/:id`, updateMovie)

const port = 4004;
app.listen(port, () => console.log(`We are up on PORT ${port}`));