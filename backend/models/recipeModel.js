// backend/models/recipeModel.js
const db = require('../db');

exports.getAllRecipes = (callback) => {
  const sql = 'SELECT * FROM dbShnkr24stud.tbl_102_recipesbychef;';
  db.query(sql, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
    console.log(sql); 
  });
};
