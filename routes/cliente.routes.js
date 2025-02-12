const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');


router.delete('/:id', clienteController.delete);

module.exports = router;
