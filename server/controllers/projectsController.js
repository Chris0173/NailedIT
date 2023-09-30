const db = require('../db');

// Retrieve current projects from the database
const getCurrentProjects = (req, res) => {
  db.query('SELECT * FROM projects WHERE is_completed = 0', (err, results) => {
    if (err) {
      console.error('Error fetching data for current projects:', err);
      res.status(500).json({ error: 'Error fetching data' });
    } else {
      res.json(results);
    }
  });
};

// Retrieve completed projects from the database
const getCompletedProjects = (req, res) => {
  db.query('SELECT * FROM projects WHERE is_completed = 1', (err, results) => {
    if (err) {
      console.error('Error fetching data for completed projects:', err);
      res.status(500).json({ error: 'Error fetching data' });
    } else {
      res.json(results);
    }
  });
};

// Add a new project to the database
const addProject = (req, res) => {
  const newProject = req.body;
  const { title, description, address, client_name, client_contact_number, additional_info, is_completed } = newProject;

  db.query(
    'INSERT INTO projects (title, description, address, client_name, client_contact_number, additional_info, is_completed) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [title, description, address, client_name, client_contact_number, additional_info, is_completed || 0],
    (err, result) => {
      if (err) {
        console.error('Error adding project to MySQL:', err);
        res.status(500).json({ error: 'Error adding project' });
      } else {
        const insertedProject = {
          project_id: result.insertId,
          title,
          description,
          address,
          client_name,
          client_contact_number,
          additional_info,
          is_completed: is_completed || 0,
        };
        res.status(201).json(insertedProject);
      }
    }
  );
};

// Delete a project from the database based on ID
const deleteProject = (req, res) => {
  const projectId = req.params.id;

  db.query('DELETE FROM projects WHERE project_id = ?', [projectId], (err, result) => {
    if (err) {
      console.error('Error deleting project from MySQL:', err);
      res.status(500).json({ error: 'Error deleting project' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Project not found' });
    } else {
      res.status(200).json({ message: 'Project deleted successfully' });
    }
  });
};

// Mark a project as completed in the database based on ID
const markProjectCompleted = (req, res) => {
  const projectId = req.params.id;

  db.query(
    'UPDATE projects SET is_completed = 1 WHERE project_id = ?',
    [projectId],
    (err, result) => {
      if (err) {
        console.error('Error marking project as completed:', err);
        res.status(500).json({ error: 'Error marking project as completed' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Project not found' });
      } else {
        res.status(200).json({ message: 'Project marked as completed successfully' });
      }
    }
  );
};

module.exports = {
  getCurrentProjects,
  getCompletedProjects,
  addProject,
  deleteProject,
  markProjectCompleted,
};
