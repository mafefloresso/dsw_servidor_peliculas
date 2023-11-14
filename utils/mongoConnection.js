const mongoose = require('mongoose');

mongoose.connect
    (
    "mongodb+srv://root:ayf9ZgYFhvgaVsbM@cluster0-l.5p9uunf.mongodb.net/movies-db?retryWrites=true&w=majority"
    )
    .then(()=> console.log("Base de datos conectada"))
    .catch((error)=> console.error("Error al conectar la base de datos", error));

module.exports = mongoose;     