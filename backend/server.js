const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const loginRoutes = require('./routers/loginRoutes'); // Importer les routes de connexion

const app = express();
const PORT = 3021;

// Middleware pour analyser les corps des requêtes en JSON
app.use(bodyParser.json());

// Configuration pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, '../frontend')));

// Utilisation des routes pour les connexions
app.use('/api', loginRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
