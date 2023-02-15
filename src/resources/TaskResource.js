import Task from '../models/task.js';

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
                props: {
                    quill: {
                        modules: {
                            toolbar: [['bold', 'italic'], ['link', 'image']],
                        },
                    }
                }
            },
            due_date: {
                position: 4
            },
            effort: {
                position: 5
            },
            order: {
                position: 6
            },
            status: {
                order: 7,
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
                order: 8,
                isRequired: true,
            },
            projectId: {
                order: 9,
                isRequired: true
            },
            user_id: {
                isVisible: false
            },
            project_id: {
                isVisible: false
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
            }
        }
    }
};