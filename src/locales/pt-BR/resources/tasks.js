import commonProps from './commonProps.js';

export default {
    tasks: {
        properties: {
            id: "ID",
            due_date: "Data de entrega",
            effort: "Esforço",
            title: "Título",
            description: "Descrição",
            order: "Prioridade",
            attachment: "Anexo",
            projectId: "Projeto",
            userId: "Responsável",
            ...commonProps,
        },
    }
}