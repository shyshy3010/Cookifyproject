const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController');

router.get('/', ingredientsController.getAllIngredients);
router.get('/:id', ingredientsController.getIngredientById);
router.post('/', ingredientsController.addIngredient);
router.put('/:id', ingredientsController.updateIngredient);
router.delete('/:id', ingredientsController.deleteIngredient);

module.exports = router;
