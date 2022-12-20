import { IValoracio } from "../Interfaces/IValoracio";

export class Valoracio implements IValoracio {
    nom!: string;
    num!: number;

    constructor(nom:string, num:number) {
        this.nom = nom;
        this.num = num;
    }

}