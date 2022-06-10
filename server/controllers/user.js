const bcrypt = require('bcrypt');
const { User } = require('../db/models');

exports.createUser = async (req, res) => {
  const { login, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      login, password: hashedPassword, email,
    });
    req.session.user = user;
    req.session.isAuth = true;
    res.json(user.login);
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

exports.authUser = async (req, res) => {
  const { email, password } = req.body;
  let isAuth = false;
  try {
    const user = await User.findOne({ where: { email } });
    const isSame = await bcrypt.compare(password, user.password);
    if (user && isSame) {
      isAuth = true;
      req.session.user = user;
      req.session.isAuth = true;
      res.json(isAuth);
    }
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};
