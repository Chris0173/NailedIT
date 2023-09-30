const bcrypt = require('bcrypt');
const db = require('../db');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

// REGISTER 
const register = (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    // Hash the password
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) throw err;

        // Store hashedPassword, first_name, last_name and email in the database
        const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
        db.query(sql, [first_name, last_name, email, hashedPassword], (err, result) => {
            if (err) {
                res.status(500).json({ error: 'An error occured while registering.' });
            } else {
                res.status(200).json({ message: 'User registered successfully.' });
            }
        });
    });
};

// LOGIN
const login = (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'An error occurred while logging in.' });
        } else if (result.length === 0) {
            res.status(401).json({ error: 'Invalid email or password' });
        } else {
            const hashedPassword = result[0].password;
            // Compare hashed password with input password
            bcrypt.compare(password, hashedPassword, (err, match) => {
                if (err) throw err;

                if (match) {
                    // Generate a token 
                    const token = jwt.sign({ userId: result[0].id }, '0552da7c3e331b67c20b52462a609a1e65de1c9bca7df35e8175d788a3298e2d');
                    res.status(200).json({ message: 'Login successful.', token });
                } else {
                    res.status(401).json({ error: 'Invailid email or password' });
                }
            });
        }
    });
}

module.exports = {
    login,
    register
};