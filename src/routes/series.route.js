const { Router } = require("express");
const route = Router();

const { getSeries, getSerieById, addSerie, updateSerie, deleteSerie } = require('../controllers/series.controller');
const { existSerie } = require('../middleware/series.middleware');

route.get("/", getSeries);

route.get("/:idSerie", existSerie, getSerieById);

route.post("/", addSerie);

route.put("/:idSerie", existSerie, updateSerie)

route.delete("/:idSerie", existSerie, deleteSerie);

module.exports = route