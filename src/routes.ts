import { Router } from "express";

// Inicialzia o router
const routes = Router();


// Rota inicial para verificar se o servidor está rodando
routes.get("/", (request, response) => {
    return response.status(200).json({ message: "Hello World!"})
});

routes.get("/number", (request, response) => {
    const randomNumber = Math.floor(Math.random() * 100);
    return response.status(200).json( randomNumber );
});
routes.get("/fibonacci/:quantidade", (request, response) => {
    const { quantidade } = request.params;

    if (+quantidade < 1) {
        return response.status(400).json({ message: "Quantidade inválida!" });
    }

    const sequencia = [];

    let a = 0;
    let b = 1;

    for (let i = 0; i < +quantidade; i++) {
        sequencia.push(a);

        const proximo = a + b;
        a = b;
        b = proximo;
    }

    return response.status(200).json(sequencia);
})
routes.get("/tabuada/:numero", (request, response) => {
    const { numero } = request.params;

    if (isNaN(numero as any)) {
        return response.status(400).json({ message: "Número inválido!" });
    }

    const tabuada = [];

    for (let i = 1; i <= 10; i++) {
        tabuada.push(`${numero} x ${i} = ${+numero * i}`);
    }

    return response.status(200).json(tabuada);
});

export default routes;