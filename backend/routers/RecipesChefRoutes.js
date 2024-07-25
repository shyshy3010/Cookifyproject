const express = require('express');
const router = express.Router();
const connection = require('../backend/database.js'); 

router.post('/add-recipe', (req, res) => {
    const { title, ingredients, instructions, image_url, prep_time, cook_time, total_time, servings, difficulty, conservation, chef_id } = req.body;
    const query = 'INSERT INTO recipes (title, ingredients, instructions, image_url, prep_time, cook_time, total_time, servings, difficulty, conservation, chef_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [title, ingredients, instructions, image_url, prep_time, cook_time, total_time, servings, difficulty, conservation, chef_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Recipe added successfully', recipeId: results.insertId });
    });
})

router.get('/recipes/:chefId', (req, res) => {
    const { chefId } = req.params;
    const query = 'SELECT * FROM recipes WHERE chef_id = ?';
    connection.query(query, [chefId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;