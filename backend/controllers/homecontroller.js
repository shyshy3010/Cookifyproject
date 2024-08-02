// backend/controllers/recipesController.js
const Home = require('../models/homeModel');

exports.getAllRecipesForYou = (req, res) => {
  Home.getAllRecipesForYou ((err, home) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(home);
  });
};
exports.getTrendingRecipes= (req, res) => {
  Home.getTrendingRecipes ((err, home) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(home);
  });
};

