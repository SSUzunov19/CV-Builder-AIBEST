const User = require('../models/User');

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
};

exports.updateUser = async (req, res) => {
  await User.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ success: 'User updated' });
};

exports.deleteUser = async (req, res) => {
  await User.destroy({
    where: { id: req.params.id }
  });
  res.json({ success: 'User deleted' });
};