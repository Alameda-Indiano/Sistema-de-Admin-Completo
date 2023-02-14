// AdminJS locales https://github.com/SoftwareBrothers/adminjs

import messages from "./messages.js";
import labels from "./labels.js";
import tasks from "./resources/tasks.js";
import projects from "./resources/projects.js";
import users from "./resources/users.js";
  
const translations = {
    actions: {
        new: "Criar novo",
        edit: "Editar",
        show: "Exibir",
        delete: "Apagar",
        bulkDelete: "Apagar todos",
        list: "Listagem",
    },
    buttons: {
        save: "Salvar",
        addNewItem: "Adicionar novo item",
        filter: "Filtrar",
        applyChanges: "Aplicar alterações",
        resetFilter: "Limpar",
        confirmRemovalMany: "Deseja remover {{count}} registro?",
        confirmRemovalMany_plural: "Deseja remover {{count}} registros?",
        logout: "Logout",
        login: "Login",
        seeTheDocumentation: "Veja: <1>documentação</1>",
        createFirstRecord: "Criar o primeiro registro",
        resetPassword: "Redefinir senha",
    },
    ...labels,
    properties: {
        length: "Tamanho",
        from: "De",
        to: "Para",
    },
    resources: {
        ...tasks,
        ...projects,
        ...users
    },
    ...messages
};
  
export default {
    locale: {
        language: "pt-BR",
        translations,
    },
};