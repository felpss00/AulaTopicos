import express from "express";
import { Request, Response } from "express";
const app = express();

console.clear();

//Funcionalidades
//Metodos/Verbos HTTP -> POST e GET...

app.get("/", (request: Request , response: Response) =>
{
    response.send("Hello World com ts-node-dev teste!");
});

app.get("/jogo/listar", (request: Request , response: Response)=> {
    const jogo =   
    {
        titulo: "CS",
        plataforma: "PC",
        valor: 50.99,
        genero: "FPS"
    };
    response.json(jogo);
});


app.listen(3000, () => 
{
    console.log("O servidor esta rodando...");
});

