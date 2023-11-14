const Movie = require('../models/movie.model');

exports.getMovies = async(req, res) => {
    try{
        const movies = await Movie.find();
        return res.status(200).json(
            {
                message: "Consultando peliculas",
                data: movies
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: "Error al consultar peliculas"
            }
        );
    }
}
exports.getMovieById = async(req, res) => {
    const MovieId = req.params.MovieId;
    try{
        const movie = await Movie.findById(MovieId);
        return res.status(200).json(
            {
                message: "Pelicula obtenida con éxito ",
                data: movie
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: "Error al consultar pelicula",
                data: error
            }
        );
    }
}

exports.newMovie = async(req, res) => {
    try{
        const {id, nombre, director, anio, duracion, genero} = req.body;
        const newMovie = new Movie({id, nombre, director, anio, duracion, genero});
        await newMovie.save();

        return res.status(200).json(
            {
                message: "Pelicula creada",
                data: newMovie
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: "Error al crear pelicula",
                data: error
            }
        );
    }
}

exports.updateMovie = async (req, res) => {
    const MovieId = req.params.MovieId;
    const newData = req.body;

    try{
        const updateMovie = await Movie.findByIdAndUpdate(MovieId, newData, {new: true});
        return res.status(201).json(
            {
                message: "Actualizar pelicula por Id: "+ MovieId,
                data: updateMovie
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: "Error al actualizar pelicula",
                data: error
            }
        );
    }
}
exports.deleteMovie= async(req, res) => {
    const MovieId = req.params.MovieId;
    try{
        await Movie.findByIdAndDelete(MovieId);
        return res.status(200).json(
            {
                message: "Pelicula eliminada por Id: "+ MovieId
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: "Error al elimiinar pelicula",
                data: error
            }
        );
    }
}