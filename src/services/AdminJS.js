import AdminJS from "adminjs";
import AdminJSExpress from '@adminjs/express';

export const adminJS = new AdminJS({
    databases: [],
    rootPath: '/Admin',
    resources: []
});

export const controllersAdminJS = AdminJSExpress.buildRouter(adminJS);
