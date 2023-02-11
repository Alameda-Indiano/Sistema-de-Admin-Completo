import express from 'express';
import cors from 'cors';

import { adminJS, controllersAdminJS } from './services/AdminJS.js';

class AppController {
    
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    };

    middlewares() {
        this.express.use(express.json());
        this.express.use(cors({
            origin: '*',
            methods: '[GET, POST, PUT, DELETE]',
            allowedHeaders: 'Content-Type, Authorization',
            optionsSuccessStatus: 204
        }));
    };

    routes() {
        this.express.use(adminJS.options.rootPath, controllersAdminJS);
    };

};

export default new AppController().express;