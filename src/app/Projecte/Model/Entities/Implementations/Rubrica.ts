import { ICriteri } from "../Interfaces/ICriteri";
import { IRubrica } from "../Interfaces/IRubrica";
import { IValoracio } from "../Interfaces/IValoracio";
import { Criteri } from "./Criteri";

export class Rubrica implements IRubrica<ICriteri<IValoracio>> {
    criteris: Array<Criteri>;

    constructor() {
        this.criteris = new Array<Criteri>;
    }

    getLongitudCriteris() {
        return this.criteris.length;
    }
}