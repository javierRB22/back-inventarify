// Rutas para Productos

// Obtener todos los productos
app.get('/api/productos', (req, res) => {
    connection.query('SELECT * FROM productos', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Crear un nuevo producto
  app.post('/api/productos', (req, res) => {
    const { nombre, descripcion, precio, proveedor, cantidad_inventario } = req.body;
    connection.query('INSERT INTO productos (nombre, descripcion, precio, proveedor, cantidad_inventario) VALUES (?, ?, ?, ?, ?)', [nombre, descripcion, precio, proveedor, cantidad_inventario], (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, nombre, descripcion, precio, proveedor, cantidad_inventario });
    });
  });
  
  // Actualizar un producto
  app.put('/api/productos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, proveedor, cantidad_inventario } = req.body;
    connection.query('UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, proveedor = ?, cantidad_inventario = ? WHERE id = ?', [nombre, descripcion, precio, proveedor, cantidad_inventario, id], (err, results) => {
      if (err) throw err;
      res.json({ id, nombre, descripcion, precio, proveedor, cantidad_inventario });
    });
  });
  
  // Eliminar un producto
  app.delete('/api/productos/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM productos WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      res.json({ id });
    });
  });