import AdminJS from "adminjs";
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import '../dataBase/index.js';

import UserResource from '../resources/UserResource.js';
import ProjectResource from '../resources/ProjectResource.js';
import TaskResource from '../resources/TaskResource.js';

import localePtBr from '../locales/pt-BR/index.js';

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJS = new AdminJS({
    databases: [],
    rootPath: '/Admin',
    resources: [UserResource, ProjectResource, TaskResource],
    ...localePtBr
});

export const controllersAdminJS = AdminJSExpress.buildRouter(adminJS);
