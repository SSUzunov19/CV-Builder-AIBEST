var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.getUsers);
router.post('/', usersController.createUser);
router.post('/auth/login', usersController.loginUser);
router.put('/:id/username', usersController.changeUsername);
router.put('/:id/email', usersController.changeEmail);
router.put('/:id/password', usersController.changePassword);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
