const express = require('express');

const router = express.Router();

const {
  getAllParty, createParty, showParty, showPartyEdit, updateParty, delParty,
} = require('../controllers/party');

const { isValidParty } = require('../middlewares/isValid');

router.get('/', getAllParty);
router.get('/create', (req, res) => { res.render('create'); });
router.post('/registration', isValidParty, createParty);
router.get('/show/:id/edit', showPartyEdit);
router.post('/show/:id', isValidParty, updateParty);
router.get('/show/:id', showParty);
router.delete('/delete', delParty);

module.exports = router;
