const express = require('express');
const router = express.Router();

const query = require('../querys/query');


/**
 * @swagger
 * /api/v1/vendas/levar-receber:
 *   post:
 *     summary: Realiza a consulta de Levar e Receber para um intervalo de datas.
 *     description: Esta rota recebe duas datas (`dataInicial` e `dataFinal`) e uma siatuacao(Fechada "F", Processada "P", Cancelada "C") e realiza a consulta de Levar e Receber, retornando as vendas que ocorreram nesse período.
 *     tags: 
 *       - Vendas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dataInicial:
 *                 type: string
 *                 format: date
 *                 description: Data inicial para filtrar as vendas
 *                 example: "2025-03-01"
 * 
 *               dataFinal:
 *                 type: string
 *                 format: date
 *                 description: Data final para filtrar as vendas
 *                 example: "2025-03-27"
 *               
 *               situacao:
 *                 type: string
 *                 format: string
 *                 description: Selecione a siatuação da venda se esta fechada processada ou cancelada              
 *                 example: "'F' para fechada, 'P' para Processada e 'C' para Cancelada"
 *             required:
 *               - dataInicial
 *               - dataFinal
 *               - situacao
 *     responses:
 *       200:
 *         description: Consulta realizada com sucesso. Retorna a lista de vendas que atendem aos critérios de data.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   VEN_CODIGO:
 *                     type: integer
 *                   FUNCIONARIO:
 *                     type: string
 *                   PPG_DESCRICAO:
 *                     type: string
 *                   VEN_LOJA:
 *                     type: integer
 *                   VEN_EMISSAO:
 *                     type: string
 *                     format: date
 *                   VEN_CLIENTE:
 *                     type: integer
 *                   VEN_SUBTOTAL:
 *                     type: number
 *                     format: float
 *                   VEN_DESC_V:
 *                     type: number
 *                     format: float
 *                   VEN_TOTAL:
 *                     type: number
 *                     format: float
 *                   VEN_HORA:
 *                     type: string
 *                   VEN_SITUACAO:
 *                     type: string
 *                   VEN_OBS:
 *                     type: string
 *                   VEN_USUARIO_PROCESSOU:
 *                     type: string
 *             example:
 *               - VEN_CODIGO: 12345
 *                 FUNCIONARIO: "João Silva"
 *                 PPG_DESCRICAO: "Cartão de Crédito"
 *                 VEN_LOJA: 1
 *                 VEN_EMISSAO: "2025-03-15"
 *                 VEN_CLIENTE: 5678
 *                 VEN_SUBTOTAL: 200.50
 *                 VEN_DESC_V: 10.00
 *                 VEN_TOTAL: 190.50
 *                 VEN_HORA: "14:30"
 *                 VEN_SITUACAO: "Finalizada"
 *                 VEN_OBS: "Observação da venda"
 *                 VEN_USUARIO_PROCESSOU: "admin"
 *       500:
 *         description: Erro interno ao realizar a consulta de Levar e Receber.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'Erro ao tentar fazer a consulta de Levar e Receber'
 */
router.post('/levar-receber', async function (req, res) {
    try {
        const result = await query.buscarLevarEReceber(req.body);        
        return res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao tentar fazer a consulta de Levar e Receber' });
    }
});

/**
 * @swagger
 * /api/v1/vendas/levar-receber:
 *   get:
 *     summary: Realiza a consulta de Levar e Receber para um intervalo de datas.
 *     description: Esta rota recebe os parâmetros de data inicial e data final via query string e realiza a consulta de Levar e Receber, retornando as vendas que ocorreram nesse período.
 *     parameters:
 *       - in: query
 *         name: dataInicial
 *         required: true
 *         description: Data inicial para filtrar as vendas.
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: dataFinal
 *         required: true
 *         description: Data final para filtrar as vendas.
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Consulta realizada com sucesso. Retorna a lista de vendas que atendem aos critérios de data.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   VEN_CODIGO:
 *                     type: integer
 *                   FUNCIONARIO:
 *                     type: string
 *                   PPG_DESCRICAO:
 *                     type: string
 *                   VEN_LOJA:
 *                     type: integer
 *                   VEN_EMISSAO:
 *                     type: string
 *                     format: date
 *                   VEN_CLIENTE:
 *                     type: integer
 *                   VEN_SUBTOTAL:
 *                     type: number
 *                     format: float
 *                   VEN_DESC_V:
 *                     type: number
 *                     format: float
 *                   VEN_TOTAL:
 *                     type: number
 *                     format: float
 *                   VEN_HORA:
 *                     type: string
 *                   VEN_SITUACAO:
 *                     type: string
 *                   VEN_OBS:
 *                     type: string
 *                   VEN_USUARIO_PROCESSOU:
 *                     type: string
 *             example:
 *               - VEN_CODIGO: 12345
 *                 FUNCIONARIO: "João Silva"
 *                 PPG_DESCRICAO: "Cartão de Crédito"
 *                 VEN_LOJA: 1
 *                 VEN_EMISSAO: "2025-03-15"
 *                 VEN_CLIENTE: 5678
 *                 VEN_SUBTOTAL: 200.50
 *                 VEN_DESC_V: 10.00
 *                 VEN_TOTAL: 190.50
 *                 VEN_HORA: "14:30"
 *                 VEN_SITUACAO: "Finalizada"
 *                 VEN_OBS: "Observação da venda"
 *                 VEN_USUARIO_PROCESSOU: "admin"
 *       500:
 *         description: Erro interno ao realizar a consulta de Levar e Receber.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'Erro ao tentar fazer a consulta de Levar e Receber'
 */
router.get('/levar-receber', async function (req, res) {
    try {       
        const result = await query.buscarLevarEReceber(req.query);
        
        return res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao tentar fazer a consulta de Levar e Receber' });
    }
});

module.exports = router;