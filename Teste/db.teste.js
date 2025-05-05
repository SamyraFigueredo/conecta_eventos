require('dotenv').config({ path: './Teste/.env.test' }); // Carrega as variáveis de ambiente

const mysql = require('mysql2/promise'); // Usando mysql2 com suporte a Promises

async function testarConexao() {
try {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    });

    console.log('✅ Conexão com o banco de dados de teste bem-sucedida!');
    await connection.end();
    } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados de teste:', error.message);
    }
    }
    
    testarConexao();
