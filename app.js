const express = require('express');
const app = express();
const port = 3000;

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.status(201).json({ username, password });
});

app.delete('/products/:id', async (req, res) => {
  Product.destroy({ where: +req.params.id });
  res.status(200).json({ message: 'product has been deleted' });
});

app.listen(port);