const express = require('express');
const app = express();
const serieRoute = require('./routes/series.route.js');

app.use(express.json());

app.use('/serie', serieRoute);


app.listen(3001, (err) => {
    /* 
    if (err) {
        console.error(err.message);
        process.exit(1)
    }*/
    console.log("Escuchando correctamente en el puerto 3001");
    
});

