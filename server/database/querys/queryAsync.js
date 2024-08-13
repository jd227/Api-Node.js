class ItemRepository{

    constructor(database){
        this.database = database;
    }

    async getAllUsers(){
        return await this.database.query('SELECT * FROM usuarios');
    }

    async getUserById(id){
        return await this.database.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    }

    async create(nombres,apellidos,edad){
        return await this.database.query('INSERT INTO usuarios (nombres,apellidos,edad) VALUES (?, ?, ?)', [nombres,apellidos,edad]);
    }

    async update(id, edad){
        return await this.database.query('UPDATE usuarios SET edad = ? WHERE id = ?', [edad, id]);
    }

    async delete(id){
        return await this.database.query('DELETE FROM usuarios WHERE id = ?', [id]);
    }



}

export default ItemRepository;