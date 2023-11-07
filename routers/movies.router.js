const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies.controller');

router.get('/', moviesController.getMovies);

router.get('/:MovieId', moviesController.getMovieById);

router.post('/', moviesController.newMovie);

router.put('/:MovieId', moviesController.updateMovie);

router.delete('/:MovieId', moviesController.deleteMovie);

module.exports = router;