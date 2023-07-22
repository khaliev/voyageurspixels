const models = require("../models");

const getAllShots = (req, res) => {
  models.shots
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllShots,
};
