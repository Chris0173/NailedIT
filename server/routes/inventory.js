const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/', inventoryController.getInventory);
router.post('/', inventoryController.addItemToInventory);
router.delete('/:id', inventoryController.deleteItemFromInventory);
router.put('/:id/adjust', inventoryController.adjustInventoryQuantity);

module.exports = router;
