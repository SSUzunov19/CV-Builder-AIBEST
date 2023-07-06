const Resume = require('../models/Resume');

exports.getAllResumes = (req, res) => {
    Resume.findAll()
        .then(resumes => {
            res.status(200).json(resumes);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.createResume = (req, res) => {
    const { user_id, template_id, title } = req.body;
    Resume.create({ user_id, template_id, title })
        .then(resume => {
            res.status(201).json(resume);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.updateResume = (req, res) => {
    const { user_id, template_id, title } = req.body;
    Resume.update({ user_id, template_id, title }, { where: { id: req.params.id } })
        .then(resume => {
            res.status(201).json(resume);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.deleteResume = (req, res) => {
    Resume.destroy({ where: { id: req.params.id } })
        .then(resume => {
            res.status(200).json(resume);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};


