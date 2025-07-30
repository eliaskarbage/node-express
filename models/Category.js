import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';


// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  }, {
  tableName: 'category',
  timestamps: true
});

export default Category;