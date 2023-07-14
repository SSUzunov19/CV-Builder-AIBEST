const Resume = require('../models/Resume');

exports.getResumeById = async (req, res) => {
  const resume = await Resume.findByPk(req.params.id);
  if (resume) {
    res.json(resume);
  } else {
    res.status(404).json({ error: 'Resume not found' });
  }
};


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