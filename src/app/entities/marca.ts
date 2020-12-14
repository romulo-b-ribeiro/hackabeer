import { BaseEntity } from "./base-entity";

export class Marca extends BaseEntity {
  nome: string;
  tipo: string;
  descricao: string;
  ingredientes: string;
  harmonizacao: string;
  alergenicos: string;
  tempIdeal: string;
  teorAlcoolico: number;
  ibu: number;
}
