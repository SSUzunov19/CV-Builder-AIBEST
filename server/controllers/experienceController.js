const Experience = require('../models/Experience');

exports.getExperience = async (req, res) => {
    const experience = await Experience.findAll();
    res.json(experience);
}

exports.createExperience = async (req, res) => {
    const newExperience = await Experience.create(req.body);
    res.json(newExperience);
}

exports.updateExperience = async (req, res) => {
    await Experience.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Experience updated' });
}

exports.deleteExperience = async (req, res) => {
    await Experience.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Experience deleted' });
}