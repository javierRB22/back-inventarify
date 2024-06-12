
const express = require("express");
const router = express.Router();

//Se establece la conexion a la base de datos
const connection = require('../db/connection');// R

// Rutas para Factura

// Obtener todas las facturas
router.get('/api/facturas', (req, res) => {
    connection.query('SELECT * FROM factura', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Crear una nueva factura
  router.post('/api/facturas', (req, res) => {
    const { Fecha, Cantidad_Producto, Cliente } = req.body;
    connection.query('INSERT INTO factura (Fecha, Cantidad_Producto, Cliente) VALUES (?, ?, ?)', [Fecha, Cantidad_Producto, Cliente], (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, Fecha, Cantidad_Producto, Cliente });
    });
  });
  
  // Actualizar una factura
  router.put('/api/facturas/:id', (req, res) => {
    const { id } = req.params;
    const { Fecha, Cantidad_Producto, Cliente } = req.body;
    connection.query('UPDATE factura SET Fecha = ?, Cantidad_Producto = ?, Cliente = ? WHERE id = ?', [Fecha, Cantidad_Producto, Cliente, id], (err, results) => {
      if (err) throw err;
      res.json({ id, Fecha, Cantidad_Producto, Cliente });
    });
  });
  
  // Eliminar una factura
  router.delete('/api/facturas/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM factura WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      res.json({ id });
    });
  });

  module.exports = router;
