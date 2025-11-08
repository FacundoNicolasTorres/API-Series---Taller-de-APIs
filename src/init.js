const init = async () => {
    const db = require('./db/models/index').sequelize;
    const { Serie } = require('./db/models')

    await db.sync({force:true});

    const serie1 = {
        nombre: "JoJo's",
        temporadas: 5,
        plataforma: 'Netflix',
        esDisponible: true
    };

    const serie2 = {
        nombre: "Los Simpsons",
        temporadas: 30,
        plataforma: 'Prime',
        esDisponible: true
    };

    const serie3 = {
        nombre: "Breaking Bad",
        temporadas: 5,
        plataforma: 'Netflix',
        esDisponible: true
    };

    await Serie.create(serie1);
    await Serie.create(serie2);
    await Serie.create(serie3);

};

module.exports = init