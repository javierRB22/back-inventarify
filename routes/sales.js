
const express = require("express");
const router = express.Router();

//Se establece la conexion a la base de datos
const connection = require('../db/connection');


// Rutas para Ventas

// Obtener todas las ventas
router.get('/api/ventas', (req, res) => {
    connection.query('SELECT * FROM ventas', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Crear una nueva venta
  router.post('/api/ventas', (req, res) => {
    const { fecha_venta, total_ventas } = req.body;
    let f_venta = new Date(fecha_venta)
    connection.query('INSERT INTO ventas (fecha_venta, total_ventas) VALUES (?, ?)', [f_venta, total_ventas], (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, fecha_venta, total_ventas });
    });
  });
  
  // Actualizar una venta
  router.put('/api/ventas/:id', (req, res) => {
    const { id } = req.params;
    const { fecha_venta, total_ventas } = req.body;
    let f_venta = new Date(fecha_venta)
    connection.query('UPDATE ventas SET fecha_venta = ?, total_ventas = ? WHERE id = ?', [f_venta, total_ventas, id], (err, results) => {
      if (err) throw err;
      res.json({ id, fecha_venta, total_ventas });
    });
  });
  
  // Eliminar una venta
  router.delete('/api/ventas/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM ventas WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      res.json({ id });
    });
  });


  //Se exporta el modulo
module.exports = router;
  