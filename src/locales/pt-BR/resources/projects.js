import commonProps from './commonProps.js';

export default {
    projects: {
        properties: {
            id: "ID",
            name: "Nome",
            description: "Descrição",
            userId: "Responsável",
            ...commonProps,
        },
    }
};