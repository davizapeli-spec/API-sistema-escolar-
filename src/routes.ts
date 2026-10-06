import { Router } from "express";
import alunoController from "./controllers/aluno";
import cursosController from "./controllers/cursos"

// Inicialzia o router
const routes = Router();


// Rota inicial para verificar se o servidor está rodando
routes.get("/", (request, response) => {
    return response.status(200).json({ message: "Hello World!" })
});



// Rotas de alunos
routes.get("/alunos", alunoController.list);
routes.get("/alunos/:id", alunoController.getById);
routes.post("/alunos", alunoController.create);
routes.put("/alunos/:id", alunoController.update);
routes.delete("/alunos/:id",alunoController.delete);

// Rotas de cursos
routes.get("/cursos", cursosController.list);
routes.get("/cursos/:id", cursosController.getById);
routes.post("/cursos", cursosController.create);
routes.put("/cursos/:id", cursosController.update);
routes.delete("/cursos/:id", cursosController.delete);

export default routes;