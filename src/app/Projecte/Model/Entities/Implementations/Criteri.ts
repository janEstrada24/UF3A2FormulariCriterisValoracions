import { ICriteri } from "../Interfaces/ICriteri";
import { IValoracio } from "../Interfaces/IValoracio";

export class Criteri implements ICriteri<IValoracio> {
    nom!: string;
    valoracions: Array<IValoracio> = new Array<IValoracio>();
    constructor(nom:string, valoracions: Array<IValoracio>) {
        this.nom = nom;
        this.valoracions = valoracions;
    }
}