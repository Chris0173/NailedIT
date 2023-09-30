const mysql = require('mysql2');
const db = require('../db');

const getInventory = (req, res) => {
  db.query('SELECT * FROM inventory', (error, results) => {
    if (error) {
      console.error('Error fetching inventory:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};

const addItemToInventory = (req, res) => {
  const { title, quantity } = req.body;
  db.query('INSERT INTO inventory (title, quantity) VALUES (?, ?)', [title, quantity], (error) => {
    if (error) {
      console.error('Error adding item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Item added successfully' });
    }
  });
};

module.exports = {
  getInventory,
  addItemToInventory
};
