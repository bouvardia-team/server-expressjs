const express = require('express');
const app = express();
const port = 3000;

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.status(201).json({ username, password });
});

app.post('/products', (req, res) => {
  const { name, price, image } = req.body;
  Product
    .create({ name, price, image })
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err => {
      res.status(500).json({ message: 'internal server error'});
    });
})

app.listen(port);