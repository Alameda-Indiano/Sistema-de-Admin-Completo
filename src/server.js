import AppController from './AppController.js';

AppController.listen(8080, () => {
    console.log(`npm run dev: API rodando na porta ${8080}`);
});