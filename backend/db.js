// backend/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '148.66.138.145',
  user: 'dbusrShnkr24',
  password: 'studDBpwWeb2!', // Remplacez par votre mot de passe
  database: 'dbShnkr24stud' // Remplacez par votre nom de base de données
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;
