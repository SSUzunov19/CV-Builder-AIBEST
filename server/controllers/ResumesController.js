const Resume = require('../models/Resume');

exports.getResumesByUserId = async (req, res) => {
  const userId = req.query.user_id; // Get the userId from the query parameter
  console.log('Received userId:', userId); // Log the userId
  const resumes = await Resume.findAll({ where: { user_id: userId } });
  res.json(resumes);
};

exports.getResumeById = async (req, res) => {
  const resume = await Resume.findByPk(req.params.id);
  res.json(resume);
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