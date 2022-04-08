const str = '{"Nombre":"Melady","Apellido":"Ventura"}';
const clientes = JSON.parse(str);

const express = require('express');

const router = express.Router();

router.get('/clientes',(req,res) =>{
    res.json({
        Nombre: clientes.Nombre,
        Apellido: clientes.Apellido,
    });
});

module.exports = router;