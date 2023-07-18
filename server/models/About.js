const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const About = sequelize.define('About', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  resume_id: {
    type: DataTypes.UUID,
    references: {
      model: 'resumes',
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
  },
  job_title: {
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
  display_image: {
    type: DataTypes.BOOLEAN,
  },
  display_mail: {
    type: DataTypes.BOOLEAN,
  },
  display_website: {
    type: DataTypes.BOOLEAN,
  },
  display_linkedin: {
    type: DataTypes.BOOLEAN,
  },
  display_instagram: {
    type: DataTypes.BOOLEAN,
  },
  display_facebook: {
    type: DataTypes.BOOLEAN,
  },
  display_github: {
    type: DataTypes.BOOLEAN,
  },
  display_twitter: {
    type: DataTypes.BOOLEAN,
  },
  active_color: {
    type: DataTypes.STRING(7),
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }
}, {
  timestamps: false,
  underscored: true,
});

module.exports = About;
