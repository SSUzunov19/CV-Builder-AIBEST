const About = require('../models/About');

exports.getAbout = async (req, res) => {
    const about = await About.findAll();
    res.json(about);
}

exports.createAbout = async (req, res) => {
    const newAbout = await About.create(req.body);
    res.json(newAbout);
}

exports.updateAbout = async (req, res) => {
    await About.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'About updated' });
}

exports.deleteAbout = async (req, res) => {
    await About.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'About deleted' });
}