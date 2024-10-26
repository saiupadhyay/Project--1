const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',       // Database host (use 'localhost' for local MySQL server)
    user: 'root',            // Your MySQL username
    password: 'your_password', // Your MySQL password
    database: 'maid_finder_db' // Your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = db;
