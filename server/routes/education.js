var express = require('express');
var router = express.Router();
const educationController = require('../controllers/educationController');

router.get('/', educationController.getEducation);
router.post('/', educationController.createEducation);
router.put('/:id', educationController.updateEducation);
router.delete('/:id', educationController.deleteEducation);

module.exports = router;