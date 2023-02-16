import Task from '../models/task.js';
import * as path from 'path';

import uploadFileFeature from '@adminjs/upload';

export default {
    resource: Task,
    options: {
        parent: {
            icon: 'Task'
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
            title: {
                position: 2,
                isRequired: true
            },
            description: {
                position: 3,
                isVisible: {
                    list: false,
                    filter: false,
                    show: true,
                    edit: true
                },
                type: 'richtext',
                custom: {
                  modules: {
                    toolbar: [['bold', 'italic'], ['link', 'image']],
                  },
                },
            },
            due_date: {
                position: 4
            },
            effort: {
                position: 5
            },
            order: {
                position: 6,
            },
            status: {
                position: 7,
                isRequired: true,
                availableValues: [
                    { value: "backlog", label: 'Backlog' },
                    { value: "doing", label: 'Em execução' },
                    { value: "done", label: 'Pronto' },
                    { value: "approved", label: 'Aprovado' },
                    { value: "rejected", label: 'Rejeitado' }
                ]
            },
            userId: {
                position: 8,
                isRequired: true,
            },
            projectId: {
                position: 9,
                isRequired: true
            },
            created_at: {
                position: 10,
                isVisible: {
                    list: true,
                    filter: true,
                    show: true,
                    edit: false
                }
            },
            updated_at: {
                position: 11,
                isVisible: {
                    list: true,
                    filter: true,
                    show: true,
                    edit: false
                }
            },
            attachment: {
                position: 12  
            },
            user_id: {
                isVisible: false
            },
            project_id: {
                isVisible: false
            },
            path: {
                isVisible: false
            },
            folder: {
                isVisible: false
            },
            type: {
                isVisible: false
            },
            filename: {
                isVisible: false
            },
            size: {
                isVisible: false
            }
        }
    },
    features: [uploadFileFeature({
        provider: {
            local: {
                bucket: 'C:/Estudos - Alura/Estudos a Parte/Sistema-de-Admin-Completo/uploads'
            }
        },
        properties: {
            key: 'path',
            bucket: 'folder',
            mimeType: 'type',
            size: 'size',
            filename: 'filename',
            file: 'attachment',
        },
        validation: {
            mimeTypes: ['image/png', 'application/pdf', 'application/zip'],
            maxSize: 5 * 1024 * 1024
        }
    })]
};