const express = require('express');
const router = express.Router();
const sectionsController = require('../controllers/SectionsController');

router.get('/', sectionsController.getSections);
router.post('/', sectionsController.createSection);
router.put('/:id', sectionsController.updateSection);
router.delete('/:id', sectionsController.deleteSection);

module.exports = router;
