export interface IPagamento{
    PPG_CODIGO: number;
    PPG_FORMA_PGTO?: string;
    PPG_DESCRICAO?: string
    PPG_INTERVALO?: number;
    PPG_QTDE_PARCELAS?: number;
}