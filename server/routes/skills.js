const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController');

router.get('/', skillsController.getSkills);
router.post('/', skillsController.createSkill);
router.put('/:id', skillsController.updateSkill);
router.delete('/:id', skillsController.deleteSkill);

module.exports = router;