import { Router, Request, Response } from 'express';
import { CicloController } from "../controllers/CicloController"

const router = Router();
const cicloController = new CicloController();


//funcionaldiades
//Metodos/verbos HTTP -> POST e GET..
router.get("/", (request: Request, response: Response) =>{
    response.send("Hello World!");
});

router.get("/ciclo/listar", cicloController.listar);

router.get("/ciclo/listar/:param1/:param2/:param3", cicloController.buscarPorId );

router.post("/ciclo/cadastar", cicloController.cadastrar);

export { router };