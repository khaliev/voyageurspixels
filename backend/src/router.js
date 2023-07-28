const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const shotControllers = require("./controllers/ShotControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/shots", shotControllers.getAllShots);

router.post("/shots", shotControllers.AddShots);

router.delete("/shots/:id", shotControllers.destroyShots);

module.exports = router;
