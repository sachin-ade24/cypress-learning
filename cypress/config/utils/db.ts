import mysql from 'mysql2/promise';

export async function executeQuery(query: string) {

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'automationdb'
    });

    const [rows] = await connection.execute(query);

    await connection.end();

    return rows;
}