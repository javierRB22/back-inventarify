

const express = require("express");
const router = express.Router();

//Se establece la conexion a la base de datos
const connection = require('../db/connection');// Rutas para Cliente

// Obtener todos los clientes
router.get('/api/cliente', (req, res) => {
  connection.query('SELECT * FROM cliente', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Crear un nuevo cliente
router.post('/api/cliente', (req, res) => {
  const { nombre, apellido, direccion, email, telefono } = req.body;
  connection.query('INSERT INTO cliente (nombre, apellido, direccion, email, telefono) VALUES (?, ?, ?, ?, ?)', [nombre, apellido, direccion, email, telefono], (err, results) => {
    if (err) throw err;
    res.json({ id: results.insertId, nombre, apellido, direccion, email, telefono });
  });
});

// Actualizar un cliente
router.put('/api/cliente/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, direccion, email, telefono } = req.body;
  connection.query('UPDATE cliente SET nombre = ?, apellido = ?, direccion = ?, email = ?, telefono = ? WHERE id = ?', [nombre, apellido, direccion, email, telefono, id], (err, results) => {
    if (err) throw err;
    res.json({ id, nombre, apellido, direccion, email, telefono });
  });
});

// Eliminar un cliente
router.delete('/api/cliente/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM cliente WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ id });
  });
});

//Se exporta el modulo
module.exports = router;
