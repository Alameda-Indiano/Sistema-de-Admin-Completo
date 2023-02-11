import AdminJS from "adminjs";
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import '../dataBase/index.js';

import UserResource from '../resources/UserResource.js';

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJS = new AdminJS({
    databases: [],
    rootPath: '/Admin',
    resources: [UserResource]
});

export const controllersAdminJS = AdminJSExpress.buildRouter(adminJS);
