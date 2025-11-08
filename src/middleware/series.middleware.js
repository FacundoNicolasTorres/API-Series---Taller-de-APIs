const series = require('../../data/series.json');

const existSerie = (req, res, next) => {
    const idSerie = req.params.idSerie;
    const data = series;
    const serie = data.filter((s) => s.id == idSerie)

    if(!(serie.length == 0)) 
        next()
        
    res.status(404).json({mensajeError: `Serie con id: ${idSerie} no pudo encontrarse`});
}

module.exports = { existSerie };