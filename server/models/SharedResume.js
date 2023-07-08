const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const SharedResume = sequelize.define('SharedResume', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4, 
    primaryKey: true,
  },
  resume_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  shareable_link: {
    type: DataTypes.STRING,
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

module.exports = SharedResume;
