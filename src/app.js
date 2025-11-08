const express = require('express');
const app = express();
const serieRoute = require('./routes/series.route.js');
const init = require('./init.js');

app.use(express.json());

app.use('/serie', serieRoute);


app.listen(3001, async (err) => {
    if (err) {
        console.error(err.message);
        process.exit(1)
    }
    await init();
    console.log("Escuchando correctamente en el puerto 3001");
    
});

