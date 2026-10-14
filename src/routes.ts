import { Router } from "express";
import alunoController from "./controllers/aluno";
import cursoController from "./controllers/cursos"
import matriculaController from "./controllers/matricula";
import funcionariosController from "./controllers/funcionario"
import { authentication } from "./middlewares/authentication";
import { isAdmin, isAdminOrHimself } from "./middlewares/permissions";

// Inicialzia o router
const routes = Router();


// Rota inicial para verificar se o servidor está rodando
routes.get("/", (request, response) => {
    return response.status(200).json({ message: "Hello World!" })
});




 // Rotas de alunos
routes.get('/alunos', authentication, alunoController.list);
routes.get('/alunos/:id', authentication, alunoController.getById);
routes.post('/alunos', authentication, alunoController.create);
routes.put('/alunos/:id', authentication, alunoController.update);
routes.delete('/alunos/:id', authentication, alunoController.delete);

// Rotas de cursos
routes.get('/cursos', authentication, cursoController.list);
routes.get('/cursos/:id', authentication, cursoController.getById);
routes.post('/cursos', authentication, cursoController.create);
routes.put('/cursos/:id', authentication, cursoController.update);
routes.delete('/cursos/:id', authentication, cursoController.delete);

// Rotas de matrículas
routes.post('/matriculas/:id', authentication, matriculaController.create);
routes.delete('/matriculas/:id', authentication, matriculaController.delete);

// Rotas de funcionários
routes.post('/login', funcionariosController.login);
routes.get("/funcionarios", authentication, isAdmin, funcionariosController.list);
routes.get("/funcionarios/:id", authentication, isAdminOrHimself, funcionariosController.getById);
routes.post("/funcionarios", authentication, isAdmin, funcionariosController.create);
routes.put("/funcionarios/:id", authentication, isAdminOrHimself, funcionariosController.update);
routes.delete("/funcionarios/:id", authentication, isAdmin, funcionariosController.delete);


export default routes;

