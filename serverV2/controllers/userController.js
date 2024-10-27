const User = require("../models/userModel.js");

const UserController = {
    getUserById: async (req, res) => {
        const { id } = req.params; // Corrigido aqui
        try {
            const user = await User.getById(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error("Error fetching user:", error); // Adicionado log de erro
            res.status(500).json({ error: "Error fetching user" });
        }
    },
    getUserbyCell: async (req,res) =>{
        const {cell} = req.params;
        try{
            const user = await User.getByCell(cell);
            if(!user){
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json(user);
        }catch(error){
            console.error("Error fetching user:", error); // Adicionado log de erro
            res.status(500).json({ error: "Error fetching user" });
        }
    }
};

module.exports = UserController;
