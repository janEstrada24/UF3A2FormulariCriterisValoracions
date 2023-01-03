import { ICriteri } from "../Interfaces/ICriteri";
import { IValoracio } from "../Interfaces/IValoracio";

export class Criteri implements ICriteri<IValoracio> {
    nom!: string;
    valoracions: Array<IValoracio>;
    constructor(nom:string) {
        this.nom = nom;
        this.valoracions = new Array<IValoracio>();
    }
}