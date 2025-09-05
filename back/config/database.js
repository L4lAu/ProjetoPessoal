import mysql from "mysql2";

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbgenerico',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});


async function getconnection() {
    return pool.getConnection();
};



// ler todos os registros
async function readAll(table, where = null) {
    const connection = await getconnection();

    try {
        let sql = `SELECT * FROM ${table}`;

        if (where) {
            sql + - ` WHERE ${where}`;
        };
        const [rows] = await connection.execute(sql);
        return rows;

    } catch (err) {

        console.error("erro ao ler os registros: ", err)
        throw err;

    } finally {
        connection.release();
    };
};


// ler um unico registro
async function read(table, where) {
    const connection = await getconnection();

    try {
        let sql = `SELECT * FROM ${table}`;
        if (where) {
            sql + - ` WHERE ${where}`;
        };
        const [rows] = await connection.execute(sql);
        return rows;
    } catch (err) {
        console.error("erro ao ler registro: ", err);
        throw err;
    } finally {
        connection.release();
    };
};


// cria um registro
async function create(table, data) {
    const connection = await getconnection();
    try {
        const columns = Object.keys(data).join(', ');

        const placeholders = Array(Object.keys(data).length).fill('?').join(', ');

        const sql = `INSERT INTO ${table} (${columns}) VALUES(${placeholders})`;

        const values = Object.values(data);
        const [result] = await connection.execute(sql, values);
        return result.insertId;
    } catch (err) {
        console.error(`erro ao criar ${table}: `, err)
        throw err;
    } finally {
        connection.release();
    };
};



// atualiza os dados de uma tabela
async function update(table, data, where) {
    const connection = await getconnection();
    try {
        const set = Object.keys(data).map(column => `${column} = ?`).join(', ');

        const sql = `UPDATE ${table} SET ${set} WHERE ${where}`;
        const values = Object.values(data);

        const [result] = await connetion.execute(sql, [...values])
        return result.affectedRows;
    } catch (err) {
        console.error("Erro ao ataulizar registros: ", err)
        throw err;
    } finally {
        connetion.release();
    };
};


// deleta um registro da tabela
async function deleteRecord(table, where) {
    const connection = await getconnection();

    try {

        const sql = `DELETE FROM ${table} WHERE  ${where}`;
        const [result] = await connection.execute(sql);
        return result.affectedRows;

    } catch (err) {
        console.error(`erro ao deletar ${where} de ${table}: `, err);
        throw err;
    } finally {
        connection.release();
    };
};


export { readAll, read, create, update, deleteRecord };


