import { request, Request, Response } from 'express';
import PessoaSchema from '../models/PessoaSchema';

class PessoaController
{
    async listar(request: Request, response: Response)
    {
        const pessoaCad = await PessoaSchema.find();
        response.status(200).json(pessoaCad);
    }


async buscarPorCpf(request: Request, response: Response) 
    {
      try{
        const { cpf } = request.params;
        const pessoaCad = await PessoaSchema.findOne({ cpf: cpf });
        if(pessoaCad != null){
          response.status(200).json({
            data: pessoaCad,
            error: false,
            msg: "Pessoa encontrada!"
          });
        }else{
          response.status(404).json({
            msg: "Pessoa não encontrada!"
          });
        }
      }catch(error){
          response.status(400).json({
            data: error,
            error: true,
            msg: "Esse não é um CPF válido!"
          })
        }
        
      }
        


  async cadastrar(request: Request, response: Response) 
  {
    try 
    {
      const novaPessoaCad = await PessoaSchema.create(request.body);
      response.status(201).json
        ({
            objeto: novaPessoaCad,
            msg: "Pessoa cadastrada com sucesso",
            erro: false
        });
    } catch (error) 
    {
      response.status(400).json
        ({
            objeto: error,
            msg: "erro na validação",
            erro: true
        });
    }
  }

  async removerPorCpf(request: Request, response: Response)
  {
    try {
      const { cpf } = request.params;
      const deletarPorCpf = await PessoaSchema.findOneAndDelete({ cpf : cpf});
      if(deletarPorCpf != null){
        response.status(200).json
      ({
        objeto: deletarPorCpf,
        msg: "Pessoa removida com sucesso!",
        erro: false
      });
      }else{
        response.status(204).json
        ({
          msg: "Pessoa não encontrada!"
        })
      }
      
    } catch (error) {
      response.status(400).json
      ({
        objeto: error,
        erro: true,
        msg: "erro"
      })
    }
  }

  async alterarPessoa(request: Request, response: Response)
  {
    try {
      const alterar = request.body;
      await PessoaSchema.updateOne(alterar);
      response.status(200).json
      ({
        objeto: alterar,
        erro: false,
        msg: "Pessoa alterada com sucesso!"
      })
    } catch (error) {
      response.status(204).json
      ({
        objeto: error,
        erro: true,
        msg: "Não foi possível alterar a pessoa"
      })
    }
  }
}

export { PessoaController };