const Education = require('../models/Education');

exports.getEducation = async (req, res) => {
    const education = await Education.findAll();
    res.json(education);
}

exports.createEducation = async (req, res) => {
    const newEducation = await Education.create(req.body);
    res.json(newEducation);
}

exports.updateEducation = async (req, res) => {
    await Education.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Education updated' });
}

exports.deleteEducation = async (req, res) => {
    await Education.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Education deleted' });
}