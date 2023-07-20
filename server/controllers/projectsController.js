const Projects = require('../models/Projects');

exports.getProjects = async (req, res) => {
    const projects = await Projects.findAll();
    res.json(projects);
}

exports.createProject = async (req, res) => {
    const newProject = await Projects.create(req.body);
    res.json(newProject);
}

exports.updateProject = async (req, res) => {
    await Projects.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Project updated' });
}

exports.deleteProject = async (req, res) => {
    await Projects.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Project deleted' });
}