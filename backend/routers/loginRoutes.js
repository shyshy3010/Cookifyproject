const express = require('express');
const router = express.Router();
const loginController = require('../controllers/controllersLogin'); // Assurez-vous que ce chemin est correct

// Route POST pour la connexion
router.post('/login', loginController.login);

module.exports = router;
