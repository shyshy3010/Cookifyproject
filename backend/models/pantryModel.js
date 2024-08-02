// models/pantryModel.js

const db = require('../db');

class Pantry {
    static async addIngredients(ingredients) {
        const query = 'INSERT INTO tbl_102_pantry_ingredients (name, quantity, unit, image) VALUES ?';
        const values = ingredients.map(ingredient => [ingredient.name, ingredient.quantity, ingredient.unit, ingredient.image]);

        await db.query(query, [values]);
    }

    static getPantryData(callback) {
        const sqlIngredients = 'SELECT * FROM dbShnkr24stud.tbl_102_pantry_ingredients;';
        const sqlMeals = 'SELECT * FROM dbShnkr24stud.tbl_102_prepared_meals;';
        
        db.query(sqlIngredients, (err, ingredients) => {
            if (err) {
                return callback(err, null);
            }

            db.query(sqlMeals, (err, meals) => {
                if (err) {
                return callback(err, null);
                }

                const data = {
                    ingredients,
                    meals
                };

                callback(null, data);
            });
        });
    }

    static deleteIngredientById(ingredientId, callback) {
        const sql = 'DELETE FROM dbShnkr24stud.tbl_102_pantry_ingredients WHERE ingredient_id = ?;';
        db.query(sql, [ingredientId], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result);
        });
    }

    static deleteMealById(mealId, callback) {
        const sql = 'DELETE FROM dbShnkr24stud.tbl_102_prepared_meals WHERE meal_id = ?;';
        db.query(sql, [mealId], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result);
        });
    }
}

module.exports = Pantry;
