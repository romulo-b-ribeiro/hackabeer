import { BaseEntity } from "./base-entity";

export class Curiosidade extends BaseEntity{
    infoDaCevada: string;
    infoDoLupulo: string;
    infoOutras: string;
    loteId: number;
}
