var express = require('express');
var router = express.Router();
const aboutController = require('../controllers/aboutController');

router.get('/', aboutController.getAbout);
router.post('/', aboutController.createAbout);
router.put('/:id', aboutController.updateAbout);
router.delete('/:id', aboutController.deleteAbout);

module.exports = router;