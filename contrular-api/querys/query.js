const { queryCommand } = require('../dataBase/mssql.db');

async function buscarLevarEReceber({ datas, situacao}) {  
    try {        
        const query = `
            USE ICommerce;
            SELECT
                V.VEN_CODIGO,
                F.FUN_NOME AS FUNCIONARIO,
                PG.PPG_DESCRICAO,           
                V.VEN_LOJA,
                FORMAT(V.VEN_EMISSAO, 'dd/MM/yyyy') AS VEN_EMISSAO,
                V.VEN_CLIENTE,
                V.VEN_SUBTOTAL,
                V.VEN_DESC_V,
                V.VEN_TOTAL,
                FORMAT(V.VEN_HORA, 'hh:mm') AS VEN_HORA,
                V.VEN_SITUACAO,
                V.VEN_OBS,
                FP.FUN_NOME AS USUARIO_PROCESSOU
            FROM 
                VENDAS V
            INNER JOIN FUNCIONARIOS F ON V.VEN_FUNCIONARIO = F.FUN_CODIGO
            INNER JOIN PLANO_PGTO PG ON V.VEN_PLANO = PG.PPG_CODIGO 
            INNER JOIN FUNCIONARIOS FP ON V.VEN_USUARIO_PROCESSOU = FP.FUN_CODIGO 
            WHERE
                    V.VEN_PLANO = 1016
                AND 
                    V.VEN_EMISSAO BETWEEN '${datas.dataInicial}' AND '${datas.dataFinal}'
                AND 
                    V.VEN_SITUACAO = '${situacao}'    
            ;
        `;       

        const result = await queryCommand(query); 

        if(result && result.recordset){
            console.log(result.recordset);
            
            return result.recordset;  
        }
        return {null: "Nenhum dado encontrado!"};  
    } catch (err) {
        console.error('Erro ao tentar fazer a consulta de Levar e Receber:', err);
        return null;
    }
}

module.exports = { buscarLevarEReceber };
