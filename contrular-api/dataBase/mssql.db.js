const sql = require('mssql');
require('dotenv').config({ path: `./environment/.env` }); // Carrega as variáveis do .env

// Configuração da conexão com SQL Server
const config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
        encrypt: process.env.DB_ENCRYPT === 'true', // Convertendo string para booleano
        trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true', // Convertendo string para booleano
        requestTimeout: parseInt(process.env.DB_REQUEST_TIMEOUT, 10) || 300000 // Convertendo string para número e definindo um padrão
    }
};

// Captura erros globais do mssql
sql.on('error', err => {
    console.error('Erro global do SQL:', err);
});

async function connect() {
    try {
        console.log('Tentando conectar com a seguinte configuração:', config);
        
        const pool = await sql.connect(config);
        console.log('✅ Conectado ao banco de dados!');
        return pool;
    } catch (error) {
        console.error('❌ Erro ao conectar ao banco de dados:', error);
        return null;
    }
}

async function queryCommand(query) {
    try {
        const pool = await connect();
        if (!pool) {
            console.log('❌ Não foi possível estabelecer conexão com o banco de dados.');
            return null;
        }

        const result = await pool.request().query(query);
        return result;
    } catch (error) {
        console.error('❌ Erro ao executar consulta:', error);
        return null;
    }
}

module.exports = { sql, connect, queryCommand };
