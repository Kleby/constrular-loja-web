const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const routerVendas = require('./routers/vendas.js');
const routerDocs = require('./routers/docs.js');

// Permite receber JSON no body das requisições
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/docs', routerDocs);

// Rotas para as APIs
app.use('/api/v1/vendas', routerVendas);


// require('dotenv').config({ path: `./environment/${process.env.NODE_ENV}.env` });

console.log(`Ambiente carregado: ${process.env.NODE_ENV}`);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

