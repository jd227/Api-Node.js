import mysql from "mysql2/promise"

// importar data base de forma asincronica

class Database {
    constructor(config){
        this.config = config;
        this.pool = mysql.createPool(config);
    }

    async getConnection(){
        return this.pool.getConnection();
    }

    async query (sql, params){
        const connection = await this.getConnection();
        try {
            const [rows] = await connection.query(sql, params);
            return rows;
        } finally {
            connection.release();
        }
    }

    async close(){
        await this.pool.end(); 
    }
}

export default Database;