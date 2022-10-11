const route = require('express').Router();

route.post('/login', async (req, res) => {
  const { username, password } = req.body;
  User.findOne({ where: { username }});
  res.status(200).json({ username, access_token });
});

module.exports = route;