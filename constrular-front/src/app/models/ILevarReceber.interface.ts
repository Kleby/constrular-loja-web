// import { IPagamento } from "./IPagamento.interface";
// import { IFuncionarios } from "./IFuncionario.interface";
// import { IVendas } from "./IVendas.interface";

export interface ILevarReceber {
    VEN_CODIGO: string;
    FUNCIONARIO: string;
    USUARIO_PROCESSOU: number;
    VEN_CLIENTE: string;
    VEN_SITUACAO: string;
    VEN_OBS?: string;
    VEN_EMISSAO: Date | string;
    VEN_HORA: string | Date;
    VEN_SUBTOTAL: number;
    VEN_DESC_V: number;
    VEN_TOTAL: number;
    DATA_RECEBIMENTO?: Date | string;
  }