// require('dotenv').config();
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//    host: process.env.DB_HOST,
//    user: process.env.DB_USER,
//    password: process.env.DB_PASSWORD,
//    database: process.env.DB_NAME
// });

//  connection.connect(err => {
//      if (err) {
//          console.error('Error connecting to the database:', err.message);
//      } else {
//          console.log('Connected to MySQL Database');
//      }
//  });

//  module.exports = connection;


require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0
});

pool.getConnection()
   .then(connection => {
       console.log('Connected to MySQL Database');
       connection.release(); 
   })
   .catch(err => {
       console.error('Error connecting to the database:', err.message);
   });

module.exports = pool;
