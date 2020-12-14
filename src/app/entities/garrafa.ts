import { BaseEntity } from "./base-entity";

export class Garrafa extends BaseEntity{
    qrCode: string;
    ciclos: number;
    qualidade: number;
    dataFabricacao: string;
    linhaEnvase: string;
    loteId: number;
}
