const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const About = sequelize.define('About', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  resume_id: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  image: {
    type: DataTypes.TEXT,
  },
  jobtitle: {
    type: DataTypes.STRING(100),
  },
  phone: {
    type: DataTypes.STRING(20),
  },
  location: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(100),
  },
  linkedin: {
    type: DataTypes.TEXT,
  },
  instagram: {
    type: DataTypes.TEXT,
  },
  facebook: {
    type: DataTypes.TEXT,
  },
  twitter: {
    type: DataTypes.TEXT,
  },
  github: {
    type: DataTypes.TEXT,
  },
  website: {
    type: DataTypes.TEXT,
  },
  about: {
    type: DataTypes.TEXT,
  },
  displayimage: {
    type: DataTypes.BOOLEAN,
  },
  displaymail: {
    type: DataTypes.BOOLEAN,
  },
  displaywebsite: {
    type: DataTypes.BOOLEAN,
  },
  displaylinkedin: {
    type: DataTypes.BOOLEAN,
  },
  displayinstagram: {
    type: DataTypes.BOOLEAN,
  },
  displayfacebook: {
    type: DataTypes.BOOLEAN,
  },
  displaygithub: {
    type: DataTypes.BOOLEAN,
  },
  displaytwitter: {
    type: DataTypes.BOOLEAN,
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

module.exports = About;
