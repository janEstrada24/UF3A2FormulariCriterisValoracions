import { IValoracio } from "./IValoracio";

export interface ICriteri <T extends IValoracio> {
    nom: string;
    valoracions: Array<T>;
}