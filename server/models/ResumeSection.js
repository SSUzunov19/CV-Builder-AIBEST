const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const ResumeSection = sequelize.define('ResumeSection', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4, 
    primaryKey: true,
  },
  resume_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('personal', 'education', 'experience', 'skills'),
    allowNull: false,
  },
  content: {
    type: DataTypes.JSONB,
  },
  section_order: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
}, {
  timestamps: false,
  underscored: true,
});

module.exports = ResumeSection;
