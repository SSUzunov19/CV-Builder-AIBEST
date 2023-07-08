const Section = require('../models/ResumeSection');

exports.getSections = async (req, res) => {
  const sections = await Section.findAll();
  res.json(sections);
};

exports.createSection = async (req, res) => {
  const newSection = await Section.create(req.body);
  res.json(newSection);
};

exports.updateSection = async (req, res) => {
  await Section.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ success: 'Section updated' });
};

exports.deleteSection = async (req, res) => {
  await Section.destroy({
    where: { id: req.params.id }
  });
  res.json({ success: 'Section deleted' });
};
