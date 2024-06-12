// Rutas para Users

// Obtener todos los usuarios
app.get('/api/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Crear un nuevo usuario
  app.post('/api/users', (req, res) => {
    const { fullname, username, password_hash, secretpin } = req.body;
    connection.query('INSERT INTO users (fullname, username, password_hash, secretpin) VALUES (?, ?, ?, ?)', [fullname, username, password_hash, secretpin], (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, fullname, username, password_hash, secretpin });
    });
  });
  
  // Actualizar un usuario
  app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { fullname, username, password_hash, secretpin } = req.body;
    connection.query('UPDATE users SET fullname = ?, username = ?, password_hash = ?, secretpin = ? WHERE id = ?', [fullname, username, password_hash, secretpin, id], (err, results) => {
      if (err) throw err;
      res.json({ id, fullname, username, password_hash, secretpin });
    });
  });
  
  // Eliminar un usuario
  app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      res.json({ id });
    });
  });
  