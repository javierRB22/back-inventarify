// Rutas para Proveedores

// Obtener todos los proveedores
app.get('/api/proveedores', (req, res) => {
    connection.query('SELECT * FROM proveedores', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Crear un nuevo proveedor
  app.post('/api/proveedores', (req, res) => {
    const { nombre, direccion, telefono } = req.body;
    connection.query('INSERT INTO proveedores (nombre, direccion, telefono) VALUES (?, ?, ?)', [nombre, direccion, telefono], (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, nombre, direccion, telefono });
    });
  });
  
  // Actualizar un proveedor
  app.put('/api/proveedores/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, telefono } = req.body;
    connection.query('UPDATE proveedores SET nombre = ?, direccion = ?, telefono = ? WHERE id = ?', [nombre, direccion, telefono, id], (err, results) => {
      if (err) throw err;
      res.json({ id, nombre, direccion, telefono });
    });
  });
  
  // Eliminar un proveedor
  app.delete('/api/proveedores/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM proveedores WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      res.json({ id });
    });
  });
  