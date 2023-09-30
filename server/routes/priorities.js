const express = require('express');
const router = express.Router();
const prioritiesController = require('../controllers/prioritiesController');

// Define routes for managing priorities
router.get('/', prioritiesController.getPriorities); // GET request to retrieve all priorities
router.post('/', prioritiesController.addPriority); // POST request to add a new priority
router.delete('/:id', prioritiesController.deletePriority); // DELETE request to delete a priority by ID

module.exports = router;
