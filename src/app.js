const express = require('express');
const repoRoutes = require('./routes/repoRoutes');

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api', repoRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
