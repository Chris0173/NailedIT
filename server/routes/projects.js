const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

// Define routes for managing projects
router.get('/current', projectsController.getCurrentProjects); // GET request to retrieve current projects
router.get('/completed', projectsController.getCompletedProjects); // GET request to retrieve completed projects
router.post('/', projectsController.addProject); // POST request to add a new project
router.delete('/:id', projectsController.deleteProject); // DELETE request to delete a project by ID
router.put('/:id/markCompleted', projectsController.markProjectCompleted); // PUT request to mark a project as completed by ID

module.exports = router;
