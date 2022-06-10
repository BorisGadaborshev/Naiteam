const router = require('express').Router();

const {
  getUserForm, createUser, getLoginForm, authUser,
} = require('../controllers/user');

const { isValidReg, isValidLog } = require('../middlewares/isValid');

router.get('/registration', getUserForm);
router.post('/registration', isValidReg, createUser);
router.get('/login', getLoginForm);
router.post('/login', isValidLog, authUser);

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('data');
  res.redirect('/');
});

module.exports = router;
