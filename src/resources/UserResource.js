import AdminJS from 'adminJS';
import User from '../models/user.js';

export default {
    resource: User,
    options: {
        actions: {
            resetPassword: {
                actionType: 'record',
                icon: 'password'
            }
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
            initials: {
                position: 2,
                isVisible: {
                    list: true,
                    filter: false,
                    show: true,
                    edit: false
                }
            },
            name: {
                position: 3,
                isRequired: true
            },
            email: {
                position: 4,
                isRequired: true
            },
            role: {
                position: 5,
                isRequired: true,
                availableValues: [
                    { value: 'admin', label: 'Administrador' },
                    { value: 'manager', label: 'Gerente' },
                    { value: 'developer', label: 'Desenvolvedor' },
                ]
            },
            status: {
                position: 6,
                isRequired: true,
                availableValues: [
                    { value: 'active', label: 'Ativo' },
                    { value: 'archived', label: 'Arquivado' }
                ]
            },
            password: {
                isVisible: true
            },
            password_hash: {
                isVisible: true
            },
            created_at: {
                position: 7,
                isVisible: {
                    list: true,
                    filter: true,
                    show: true,
                    edit: false
                }
            },
            updated_at: {
                position: 8,
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