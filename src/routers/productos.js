const str = '{"Producto":"Laptop","Precio":"1500"}';
const productos = JSON.parse(str);

const express = require('express');

const router = express.Router();

router.get('/productos',(req,res) =>{
    res.json({
        Producto : productos.Producto,
        Precio : productos.Precio,
    });
});

module.exports = router;