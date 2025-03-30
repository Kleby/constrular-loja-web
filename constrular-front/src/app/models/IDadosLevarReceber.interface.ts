import { IData } from "./IData.interface";
import { ILevarReceber } from "./ILevarReceber.interface";

export interface IDadosLevarReceber {
    datas: IData,
    levarReceber: Array<ILevarReceber>,
}