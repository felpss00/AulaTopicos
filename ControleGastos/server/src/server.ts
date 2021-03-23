import express from "express";
import { Request, Response } from "express";
const app = express();

console.clear();

//Funcionalidades
//Metodos/Verbos HTTP -> POST e GET...

app.get("/", (request: Request , response: Response) =>
{
    response.send("Hello World!");
});


app.listen(3000, () => 
{
    console.log("O servidor esta rodando...");
});

