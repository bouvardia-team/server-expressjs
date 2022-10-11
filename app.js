const express = require('express');
const app = express();
const port = 3000;

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.status(201).json({ username, password });
});

app.listen(port);