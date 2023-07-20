const Skills = require('../models/Skills');

exports.getSkills = async (req, res) => {
    const skills = await Skills.findAll();
    res.json(skills);
}

exports.createSkill = async (req, res) => {
    const newSkill = await Skills.create(req.body);
    res.json(newSkill);
}

exports.updateSkill = async (req, res) => {
    await Skills.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Skill updated' });
}

exports.deleteSkill = async (req, res) => {
    await Skills.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Skill deleted' });
}