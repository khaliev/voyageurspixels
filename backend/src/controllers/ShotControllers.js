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

const AddShots = (req, res) => {
  const { originalTitle, original, thumbnail } = req.body;

  if (!originalTitle || !original || !thumbnail) {
    res.status(400).json({ error: "Missing required fields" });
  } else {
    models.shots
      .addshots({ originalTitle, original, thumbnail })
      .then((newShots) => res.json(newShots))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const destroyShots = (req, res) => {
  models.shots
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllShots,
  AddShots,
  destroyShots,
};
