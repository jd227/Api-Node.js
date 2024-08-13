import mysql from 'mysql2/promise';

class Database {

        constructor(config) {
            this.config = config;
            this.pool = mysql.createPool(config);
        }

        async getConnection() {
            return await this.pool.getConnection();
        }

        async query(sql, params) {
            const connection = await this.getConnection();
            try {
                const [row] = await connection.query(sql, params);
                return row;
            } finally {
                connection.release();
            }
        }
    
        async close() {
            await this.pool.end();
        }
    }

export default Database;