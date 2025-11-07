const series = require('../data/series.json');
const express = require('express');
const app = express();

//PRIMERO const series = []

app.use(express.json());

app.get("/serie", (req, res) => {
    const data = series;

    res.status(200).json(data);
});

app.get("/serie/:idSerie", (req, res) => {
    const idSerie = req.params.idSerie;
    const data = series;
    const serie = data.filter((s) => s.id == idSerie)

    res.status(200).json(serie);
});

app.post("/serie", (req, res) => {
    const data = req.body;
    const id = series.reduce((max, serie) =>  serie.id > max ? serie.id : max, 0) + 1;
    const save = {id, ...data};
    series.push(save);

    res.status(201).json(save);
});

app.delete("/serie/:id", (req, res) => {
    const idSerie = req.params.id;
    
    const index = series.findIndex((s) => s.id == idSerie);
    if (index === -1)
        res.status(404).json({mensajeError: `El id ${idSerie} no fue encontrado`});

    series.splice(index, 1);

    res.status(200).json(series);
});

app.listen(3001, (err) => {
    /* 
    if (err) {
        console.error(err.message);
        process.exit(1)
    }*/
    console.log("Escuchando correctamente en el puerto 3001");
    
});

