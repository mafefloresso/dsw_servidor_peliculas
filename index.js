const express = require('express');
const morgan = require('morgan');

const moviesRouter = require('./routers/movies.router');
const app = express();
const port = 3003;

app.use(morgan('dev'));
app.use(express.json({limit: '50mb'}));
app.use('/movies', moviesRouter);

app.listen(port, () => {
    console.log("Servidor iniciado en http://localhost:" + port);
})