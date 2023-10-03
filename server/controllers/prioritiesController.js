const db = require('../db');

// Retrieve all priorities from the database
const getPriorities = (req, res) => {
    db.query('SELECT * FROM top_priorities', (err, results) => {
        if (err) {
            console.error('Error fetching priorities from MySQL:', err);
            res.status(500).json({ error: 'Error fetching priorities' });
        } else {
            res.json(results);
        }
    });
};

// Add a new priority to the database
const addPriority = (req, res) => {
    const newPriority = req.body;
    const sql = 'INSERT INTO top_priorities (priority_name, description, priority_level) VALUES (?, ?, ?)';
    const values = [newPriority.priority_name, newPriority.description, newPriority.priority_level];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error adding priority to MySQL:', err);
            res.status(500).json({ error: 'Error adding priority' });
        } else {
            const insertedPriority = {
                id: result.insertId,
                ...newPriority,
            };
            console.log('Priority added to MySQL:', insertedPriority);
            res.status(201).json(insertedPriority);
        }
    });
};

// Delete a priority from the database based on ID
const deletePriority = (req, res) => {
    const priorityId = req.params.id;

    db.query('DELETE FROM top_priorities WHERE priority_id = ?', [priorityId], (err, result) => {
        if (err) {
            console.error('Error deleting priority from MySQL:', err);
            res.status(500).json({ error: 'Error deleting priority' });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Priority not found' });
        } else {
            res.status(200).json({ message: 'Priority deleted successfully' });
        }
    });
};

module.exports = {
    getPriorities,
    addPriority,
    deletePriority,
};
