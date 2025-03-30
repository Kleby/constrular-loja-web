export interface IVendas{
    VEN_CODIGO: number;           
    VEN_EMISSAO: Date | string; 
    VEN_CLIENTE: number;
    VEN_SUBTOTAL: number;
    VEN_DESC_V: number;
    VEN_TOTAL: number;
    VEN_SITUACAO?: string;
    VEN_OBS?: string;
    VEN_USUARIO_PROCESSOU?: string;

}