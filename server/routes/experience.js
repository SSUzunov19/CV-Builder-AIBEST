var express = require('express');
var router = express.Router();
const experienceController = require('../controllers/experienceController');

router.get('/', experienceController.getExperience);
router.post('/', experienceController.createExperience);
router.put('/:id', experienceController.updateExperience);
router.delete('/:id', experienceController.deleteExperience);

module.exports = router;