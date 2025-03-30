const sql = require('mssql');

// Connection configuration
const config = {
    server: '170.79.76.118',
    database: 'ICommerce',
    user: 'sa',
    password: 'id-0601',
    options: {
        encrypt: false, // Use true for Azure SQL Server
        trustServerCertificate: false, // Change to true if your server certificate is self-signed
        requestTimeout: 300000 // 5 minutes
    }

};


async function connect(){
    try {
        const pool = await sql.connect(config);
        console.log('Conectado ao banco de dados!');
        return pool;
    } catch (error) {
        console.log('Erro ao conectar ao banco de dados: ', error);
    }
}

async function queryCommand(query){
    try {
        const pool = await connect();
        if (!pool) {
            console.log('Não foi possível estabelecer conexão com o banco de dados.');
            return null;
        }
        const result = await pool.request().query(query);        
        return result;
    }
    catch (error) {
        console.log('Erro ao consultar clientes: ', error);
        return null;
    }
}

module.exports = {sql , connect, queryCommand};