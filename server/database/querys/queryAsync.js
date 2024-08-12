class ItemRepository{

    constructor(database){
        this.database = database;
    }

    async getAllUsers(){
        return await this.database.query('SELECT * FROM personas');
    }

    async getUserById(id){
        return await this.database.query('SELECT * FROM personas WHERE id = ?', [id]);
    }

    async create(user){
        return await this.database.query('INSERT INTO personas SET ?', [user]);
    }

    async update(id, user){
        return await this.database.query('UPDATE personas SET ? WHERE id = ?', [user, id]);
    }

    async delete(id){
        return await this.database.query('DELETE FROM personas WHERE id = ?', [id]);
    }
}