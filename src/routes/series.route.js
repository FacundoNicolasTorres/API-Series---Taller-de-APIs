const series = require('../../data/series.json');
const { Router } = require("express");
const route = Router();

const { getSeries, getSerieById, addSerie, updateSerie, deleteSerie } = require('../controllers/series.controller');


route.get("/", getSeries);

route.get("/:idSerie", getSerieById);

route.post("/", addSerie);

route.put("/:idSerie", updateSerie)

route.delete("/:idSerie", deleteSerie);

module.exports = route