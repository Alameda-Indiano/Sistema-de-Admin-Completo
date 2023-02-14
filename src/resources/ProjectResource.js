import AdminJS from 'adminJS';
import Project from '../models/project.js';

export default {
    resource: Project,
    options: {
        parent: {
            icon: 'Roadmap'
        },
        properties: {
            id: {
                position: 1,
                isVisible: {
                    list: true, 
                    filter: true,
                    show: true,
                    edit: false
                }
            },
            name: {
                position: 2,
                isRequired: true
            },
            description: {
                position: 3,
                type: 'textarea'
            },
            userId: {
                position: 4
            },
            user_id: {
                isVisible: false
            },
            status: {
                position: 5,
                isRequired: true,
                availableValues: [
                    { value: 'active', label: 'Ativo' },
                    { value: 'archived', label: 'Arquivado' }
                ]
            },
            created_at: {
                position: 6,
                isVisible: {
                    list: true,
                    filter: true,
                    show: true,
                    edit: false
                }
            },
            updated_at: {
                position: 7,
                isVisible: {
                    list: true,
                    filter: true,
                    show: true,
                    edit: false
                }
            }
        }
    }
};