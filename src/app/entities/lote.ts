import { BaseEntity } from "./base-entity";

export class Lote extends BaseEntity {
    etiqueta: string;
    localFabricacao: string;
    dataValidade: string;
    marcaId: number;
}
