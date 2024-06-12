// Rutas para CategoriaProducto

// Obtener todas las categorías
app.get('/api/categories', (req, res) => {
  connection.query('SELECT * FROM categoriaproductos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Crear una nueva categoría
app.post('/api/categories', (req, res) => {
  const { nombre, descripcion } = req.body;
  connection.query('INSERT INTO categoriaproductos (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion], (err, results) => {
    if (err) throw err;
    res.json({ id: results.insertId, nombre, descripcion });
  });
});

// Actualizar una categoría
app.put('/api/categories/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  connection.query('UPDATE categoriaproductos SET nombre = ?, descripcion = ? WHERE id = ?', [nombre, descripcion, id], (err, results) => {
    if (err) throw err;
    res.json({ id, nombre, descripcion });
  });
});

// Eliminar una categoría
app.delete('/api/categories/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM categoriaproductos WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ id });
  });
});