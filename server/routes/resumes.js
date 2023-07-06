const express = require('express');
const router = express.Router();
const resumesController = require('../controllers/ResumesController');

router.get('/api/resumes', resumesController.getAllResumes);
router.post('/api/resumes', resumesController.createResume);
router.put('/api/resumes/:id', resumesController.updateResume);
router.delete('/api/resumes/:id', resumesController.deleteResume);

module.exports = router;
