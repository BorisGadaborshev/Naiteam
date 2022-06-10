const { User, Party } = require('../db/models');

exports.getAllParty = async (req, res) => {
  try {
    const allParty = await Party.findAll();
    res.render('party', { allParty });
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

exports.createParty = async (req, res) => {
  const { name, location, start } = req.body;
  console.log(name, location, start);

  try {
    const party = await Party.create({
      name, location, start, host: req.session.user.login,
    });
    res.json(party.name);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

exports.showParty = async (req, res) => {
  const oneParty = await Party.findByPk(req.params.id, { raw: true });

  res.render('show', { oneParty });
};

exports.showPartyEdit = async (req, res) => {
  const oneParty = await Party.findByPk(req.params.id, { raw: true });

  res.render('edit', { oneParty });
};

exports.updateParty = async (req, res) => {
  const {
    name, location, start,
  } = req.body;
  const { id } = req.params;
  const idparty = await Party.findByPk(id, { raw: true });
  // if (req.session.login === idparty.host) {
  try {
    await Party.update({
      name, location, start, host: req.session.user.login,
    }, { where: { id } });
    res.json(idparty);

    // res.redirect(`/party/show/${id}`);
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
  // }
};

exports.delParty = async (req, res) => {
  const { id } = req.body;
  const idparty = await Party.findByPk(id, { raw: true });
  // if (req.session.login === idparty.host) {
  try {
    const destroyItem = await Party.destroy({ where: { id } });
    res.status(200).end();
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
  // }
};
