import { Router, Request, Response } from 'express';
import { PessoaController } from "../Controllers/PessoaController"

const router = Router();
const pessoaController = new PessoaController();

router.post("/pessoa/cadastrar", pessoaController.cadastrar);

router.get("/pessoa/buscar/:cpf", pessoaController.buscarPorCpf);

router.get("/pessoa/listar", pessoaController.listar);

router.delete("/pessoa/remover/:cpf", pessoaController.removerPorCpf);

router.put("/pessoa/alterar", pessoaController.alterarPessoa);

export { router };

