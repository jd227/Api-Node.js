import connection from "../connection/db";

const getAlluser =()=>{
    const query = "SELECT * FROM usuarios";
    return connection.query(query); 
}

const getAllById =(id) => {
    const query = "SELECT * FROM usuarios WHERE id = ?";
    return connection.query(query, [id]); 
}

const createUser =(user) => {
    const query = "INSERT INTO usuarios SET ?";
    return connection.query(quer, usery); 
}

const updateUser =(user, id)=>{
    const query = "UPDATE usuarios ? WHERE id = ?";
    return connection.query(query, [user,id]);
}

const deleteUser =(id)=>{
    const query = "DELETE FROM usuarios WHERE id = ?";
    return connection.query(query, [id]);
}
export default {
    getAlluser,
    getAllById,
    createUser,
    updateUser,
    deleteUser
}