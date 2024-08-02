const express = require('express');
const router = express.Router();
const homeModel = require('../models/homeModel');

router.get('/home', (req, res) => {
  homeModel.getAllRecipesForYou((err, recipesForYou) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    homeModel.getTrendingRecipes((err, trendingRecipes) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({ recipesForYou, trendingRecipes });
    });
  });
});

module.exports = router;
