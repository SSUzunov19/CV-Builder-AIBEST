const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Resume = require('./Resume');
const ResumeSection = require('./ResumeSection');

Resume.hasMany(ResumeSection, { 
  foreignKey: 'resume_id', 
  as: 'sections' 
});

ResumeSection.belongsTo(Resume, { 
  foreignKey: 'resume_id' 
});

module.exports = {
  sequelize,
  Sequelize,
  Resume,
  ResumeSection
};
