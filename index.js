const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const { createServer } = require('node:http');

const app = express();
const port = 3002;

const server = createServer(app);

app.use(cors());
app.use(express.json());


app.use(require('./routes/categories'));
app.use(require('./routes/clients'));
app.use(require('./routes/departments'));
app.use(require('./routes/invoices'));
app.use(require('./routes/products'));
app.use(require('./routes/providers'));
app.use(require('./routes/sales'));
app.use(require('./routes/users'));

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
