import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';


// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

const Users = sequelize.define('Users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: true
});

export default Users;