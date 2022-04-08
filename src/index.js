const express = require('express');
const clientesRouter = require('./routers/clientes');
const productosRouter = require('./routers/productos');

const app = express();

app.use(express.json());

app.use('',clientesRouter);
app.use('',productosRouter);

app.listen(5000, () => console.log('Corriendo en el puerto 5000'));