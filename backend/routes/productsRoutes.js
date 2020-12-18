const express = require('express');
const router = express.Router();

const productsController = require('../controller/productsController');

router.get('/', productsController.getList);
router.get('/:id', productsController.get);
router.get('/getByName/:name', productsController.getByName);
router.delete('/:id', productsController.remove);

module.exports = router;