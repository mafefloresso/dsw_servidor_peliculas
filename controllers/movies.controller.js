exports.getMovies = (req, res) => {
    try{
        return res.status(200).json(
            {
                message: "Consultando peliculas"
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
exports.getMovieById = (req, res) => {
    try{
        const MovieId = req.params.MovieId;
        return res.status(200).json(
            {
                message: "Consultando pelicula por Id: "+ MovieId
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

exports.newMovie = (req, res) => {
    try{
        const newMovie= req.body;
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

exports.updateMovie = (req, res) => {
    try{
        const MovieId = req.params.MovieId;
        const updateMovie = req.body;
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
exports.deleteMovie= (req, res) => {
    try{
        const MovieId = req.params.MovieId;
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