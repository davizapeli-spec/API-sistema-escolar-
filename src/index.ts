import http from "http";
import app from  "./app";

// Cria o servidor HTTP usando regras do app 

// Define a porta do servidor 
const PORT = process.env.PORT || 8080;

// Iniciar o servidor 
server.listen(PORT, () => console.info("Servidor escutando na porta ${PORT}") )