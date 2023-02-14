import { Sequelize } from "sequelize";
import config from '../config/dataBase.js';

import User from "../models/user.js";
import Project from "../models/project.js";

const models = [
  User,
  Project
];

class DataBase {
  
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
  };

  init() {
    models.forEach((model) => model.init(this.connection));
  };

  associate() {
    models.forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models);
      };
    });
  };

};

export default new DataBase();

