const express = require('express');
const router = express.Router();
const resumesController = require('../controllers/resumesController');

router.get('/', resumesController.getResumesByUserId);
router.get('/:id', resumesController.getResumeById);
router.post('/', resumesController.createResume);
router.put('/:id', resumesController.updateResume);
router.get('/:id/template', resumesController.fetchTemplateofResume);
router.put('/:id/template', resumesController.updateTemplate);
router.delete('/:id', resumesController.deleteResume);

module.exports = router;
