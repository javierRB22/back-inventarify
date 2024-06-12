// Rutas para Ventas

// Obtener todas las ventas
app.get('/api/ventas', (req, res) => {
    connection.query('SELECT * FROM ventas', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Crear una nueva venta
  app.post('/api/ventas', (req, res) => {
    const { fecha_venta, total_ventas } = req.body;
    connection.query('INSERT INTO ventas (fecha_venta, total_ventas) VALUES (?, ?)', [fecha_venta, total_ventas], (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, fecha_venta, total_ventas });
    });
  });
  
  // Actualizar una venta
  app.put('/api/ventas/:id', (req, res) => {
    const { id } = req.params;
    const { fecha_venta, total_ventas } = req.body;
    connection.query('UPDATE ventas SET fecha_venta = ?, total_ventas = ? WHERE id = ?', [fecha_venta, total_ventas, id], (err, results) => {
      if (err) throw err;
      res.json({ id, fecha_venta, total_ventas });
    });
  });
  
  // Eliminar una venta
  app.delete('/api/ventas/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM ventas WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      res.json({ id });
    });
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  }); 