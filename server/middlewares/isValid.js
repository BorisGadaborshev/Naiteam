exports.isValidReg = (req, res, next) => {
  try {
    const { login, email, password } = req.body;

    if (login.length !== 0 && email.length !== 0 && password.length !== 0) {
      next();
    } else {
      res.status(400).end();
    }
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

exports.isValidLog = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (email.length !== 0 && password.length !== 0) {
      next();
    } else {
      res.status(400).end();
    }
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

exports.isValidParty = (req, res, next) => {
  const { name, location, start } = req.body;
  if (name.length !== 0 && location.length !== 0 && start.length !== 0) {
    next();
  } else {
    res.status(400).end();
  }
};
