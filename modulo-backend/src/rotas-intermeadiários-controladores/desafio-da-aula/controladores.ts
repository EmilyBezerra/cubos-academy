import { Request, Response } from "express";
import bancoDeDados from "./bancoDeDados";


export const listarConvidados = (req: Request, res: Response) => {
  const { idadeMaxima } = req.query;
  let convidados = bancoDeDados;

  if (idadeMaxima) {
    const idade = Number(idadeMaxima);
    convidados = bancoDeDados.filter((pessoa) => pessoa.idade <= idade);
  }

  res.json(convidados);
};

export const obterConvidado = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ mensagem: `Convidado com ID ${id}` });
};

