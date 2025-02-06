import express from "express";
import { listarConvidados, obterConvidado} from "./controladores";
import { validarIdadeMaxima } from "./intermediarios";

const app = express();
const porta = 3000;

app.get("/", (req, res) => {
  res.send("API de lista de convidados");
});

app.get("/convidados", validarIdadeMaxima, listarConvidados);
app.get("/convidados/:id", obterConvidado);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});