const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Vendas",
            version: "1.0.0",
            description: "Documentação da API de Vendas",
        },
        servers: [
            {
                url: "http://localhost:5000",
                description: "Servidor local",
            },
        ],
        basePath: '/',
        schemes: ['http'],
    },
    apis: ["./routers/*.js"], // Caminho dos arquivos onde as rotas estão documentadas
};

const swaggerSpec = swaggerJSDoc(options);

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;