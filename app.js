const express = require('express');
const db = require('./db');  // Import the MySQL connection

const app = express();
app.use(express.json());

// User Signup Route
app.post('/signup-user', (req, res) => {
    const { name, email, password, location } = req.body;
    
    const sql = 'INSERT INTO users (name, email, password, location) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [name, email, password, location], (err, result) => {
        if (err) {
            return res.status(500).send('Error signing up user.');
        }
        res.send('User signed up successfully.');
    });
});

// Maid Signup Route
app.post('/signup-maid', (req, res) => {
    const { name, experience, work_type, contact, location } = req.body;

    const sql = 'INSERT INTO maids (name, experience, work_type, contact, location) VALUES (?, ?, ?, ?, ?)';
    
    db.query(sql, [name, experience, work_type, contact, location], (err, result) => {
        if (err) {
            return res.status(500).send('Error signing up maid.');
        }
        res.send('Maid signed up successfully.');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
