const express = require('express');
const controllers = require('../controllers/controllers.js');
const router = express.Router();

router.get('/contacts', controllers.contactsList);

router.get('/contacts/:_id', controllers.getById);
router.post('/api/contacts', controllers.addContact);
router.delete('/api/contacts/:_id', controllers.removeContact);
router.put('/api/contacts/:_id', controllers.updateContact);

module.exports = router;
