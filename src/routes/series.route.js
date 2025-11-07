const series = require('../../data/series.json');
const { Router } = require("express");
const route = Router();

const { getSeries, getSerieById, addSerie, deleteSerie } = require('../controllers/series.controller');


route.get("/", getSeries);

route.get("/:idSerie", getSerieById);

route.post("/", addSerie);

route.delete("/:id", deleteSerie);

module.exports = route