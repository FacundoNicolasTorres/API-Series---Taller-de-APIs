const { Serie } = require('../db/models');

const existSerie = async (req, res, next) => {
    const idSerie = req.params.idSerie;
    const serie = await Serie.findByPk(idSerie)

    if(!serie) 
        res.status(404).json({mensajeError: `Serie con id: ${idSerie} ${serie} no pudo encontrarse`});
    
    req.serie = serie;
    next()
}

module.exports = { existSerie };