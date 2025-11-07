const series = require('../../data/series.json');

const getSeries = (req, res) => {
    const data = series;

    res.status(200).json(data);
};

const getSerieById = (req, res) => {
    const idSerie = req.params.idSerie;
    const data = series;
    const serie = data.filter((s) => s.id == idSerie)

    if(serie.length == 0) 
        res.status(404).json({mensajeError: `Serie con id: ${idSerie} no pudo encontrarse`});

    res.status(200).json(serie);
};

const addSerie = (req, res) => {
    const data = req.body;
    const id = series.reduce((max, serie) =>  serie.id > max ? serie.id : max, 0) + 1;
    const serie = {id, ...data};
    //otra forma
    //const { nombre, temporadas, plataforma, disponible } = req.body
    /*const serie = {
        id,
        nombre,
        temporadas,
        plataforma,
        disponible
    }*/
    series.push(serie);

    res.status(201).json(serie);
};

const deleteSerie = (req, res) => {
    const idSerie = req.params.id;
    
    const index = series.findIndex((s) => s.id == idSerie);
    if (index === -1)
        res.status(404).json({mensajeError: `El id ${idSerie} no fue encontrado`});

    series.splice(index, 1);

    res.status(200).json(series);
};

module.exports = { getSeries, getSerieById, addSerie, deleteSerie }