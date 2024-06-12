
const express = require("express");
const router = express.Router();

//Se establece la conexion a la base de datos
const connection = require('../db/connection');// R

router.get('/api/departamentos', (req, res) => {
    connection.query('SELECT * FROM departamentos', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Crear un nuevo departamento
  router.post('/api/departamentos', (req, res) => {
    const { nombre, descripcion } = req.body;
    connection.query('INSERT INTO departamentos (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion], (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, nombre, descripcion });
    });
  });
  
  // Actualizar un departamento
  router.put('/api/departamentos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    connection.query('UPDATE departamentos SET nombre = ?, descripcion = ? WHERE id = ?', [nombre, descripcion, id], (err, results) => {
      if (err) throw err;
      res.json({ id, nombre, descripcion });
    });
  });
  
  // Eliminar un departamento
  router.delete('/api/departamentos/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM departamentos WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      res.json({ id });
    });
  });

  //Se exporta el modulo
module.exports = router;
