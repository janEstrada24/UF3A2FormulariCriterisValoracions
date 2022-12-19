import { ICriteri } from "./ICriteri";
import { IValoracio } from "./IValoracio";

export interface IRubrica <T extends ICriteri<IValoracio>> {
    criteris: Array<T>;
}