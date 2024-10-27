const pool = require("../config/config.js")
const User = {
    getById: async(id)=>{
        const result = await pool.query("select * from clientes where id = $1",[id]);
        return result.rows[0];
    },
    getByCell: async(cell)=>{
        const result = await pool.query("select * from clientes where celular = $1",[cell]);
        return result.rows[0];
    }
}

module.exports = User;