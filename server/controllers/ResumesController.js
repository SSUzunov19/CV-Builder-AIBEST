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

exports.updateTemplate = async (req, res) => {
  try {
    console.log('Received templateId:', req.body.templateId);
    console.log('Received req.body in controller', req.body);
    const resume = await Resume.findByPk(req.params.id);
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    resume.template_id = req.body.templateId;
    console.log('Received resume.template_id in controller', resume.template_id);
    await resume.save();
    res.json({ success: 'Resume template updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the template' });
  }
};

exports.deleteResume = async (req, res) => {
  await Resume.destroy({
    where: { id: req.params.id }
  });
  res.json({ success: 'Resume deleted' });
};