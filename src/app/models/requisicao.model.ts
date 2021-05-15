import { Model } from "../core/model";
import { Departamento } from "./departamento.model";
import { Funcionario } from "./funcionario.model";

export class Requisicao extends Model {
  solicitante: Funcionario = new Funcionario();
  dataAbertura: any;
  ultimaAtualizacao: any;
  descricao: string = "";
  status: string = "";
  destino: Departamento = new Departamento();
  movimentacoes: Movimentacao[] = [];
}

export class Movimentacao extends Model {
  funcionario: Funcionario = new Funcionario();
  dataHora: any;
  status: string = "";
  descricao: string = "";
}
