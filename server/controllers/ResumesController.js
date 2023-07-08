const Resume = require('../models/Resume');

exports.getAllResumes = async (req, res) => {
  const resumes = await Resume.findAll();
  res.json(resumes);
};

exports.createResume = async (req, res) => {
  const newResume = await Resume.create(req.body);
  res.json(newResume);
};

exports.updateResume = async (req, res) => {
  await Resume.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ success: 'Resume updated' });
};

exports.deleteResume = async (req, res) => {
  await Resume.destroy({
    where: { id: req.params.id }
  });
  res.json({ success: 'Resume deleted' });
};