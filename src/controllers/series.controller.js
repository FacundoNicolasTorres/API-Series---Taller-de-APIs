const { Serie } = require('../db/models');

const getSeries = async (req, res) => {
    const data = await Serie.findAll({});

    res.status(200).json(data);
};

const getSerieById = async (req, res) => {
    const idSerie = req.params.idSerie;
    const serie = await Serie.findByPk(idSerie)

    res.status(200).json(serie);
};

const addSerie = async (req, res) => {
    const newSerie = req.body;
    const record = await Serie.create(newSerie)

    res.status(201).json(record);
};

const updateSerie = async (req, res) => {
    const idSerie = req.params.idSerie;
    const serieUpdate = req.body
    
    const update = await Serie.update(serieUpdate, {
        where : {id: idSerie}
    });

    //Devuelve la cantidad de filas modificadas, en este caso 1
    res.status(200).json(update);
};

const deleteSerie = async (req, res) => {
    const idSerie = req.params.idSerie;
    const serieDelete = await Serie.findByPk(idSerie)

    await serieDelete.destroy()

    //Es mas correcto devolver el status code 204 que no devuelve un mensaje, el servidor solo confirma que la accion se cumplio
    res.status(200).json({mensajeExito: "Fue eliminada con exito"});
};

module.exports = { getSeries, getSerieById, addSerie, deleteSerie, updateSerie }