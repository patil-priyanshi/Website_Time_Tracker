const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Priyanshi1124',
  database: 'tracker',
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sample route to fetch users from database
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving users from database');
    } else {
      res.json(results);
    }
  });
});

// Sample route to fetch browsing activity from database
app.get('/browsing-activity', (req, res) => {
  db.query('SELECT * FROM browsing_activity', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving browsing activity from database');
    } else {
      res.json(results);
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});