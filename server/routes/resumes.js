const express = require('express');
const router = express.Router();
const resumesController = require('../controllers/ResumesController');

router.get('/', resumesController.getAllResumes);
router.post('/', resumesController.createResume);
router.put('/:id', resumesController.updateResume);
router.delete('/:id', resumesController.deleteResume);

module.exports = router;
