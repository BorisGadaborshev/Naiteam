const router = require('express').Router();

const {
  createUser, authUser,
} = require('../controllers/user');

const { isValidReg, isValidLog } = require('../middlewares/isValid');

router.post('/registration', isValidReg, createUser);

router.post('/login', isValidLog, authUser);

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('data');
});

module.exports = router;
