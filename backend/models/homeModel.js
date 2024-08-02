const db = require('../db');

exports.getAllRecipesForYou = (callback) => {
  const sql = 'SELECT * FROM dbShnkr24stud.tbl_102_recipes_foryou;';
  db.query(sql, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

exports.getTrendingRecipes = (callback) => {
  const sql = 'SELECT * FROM dbShnkr24stud.tbl_102_recipes_trendingnow;';
  db.query(sql, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};
