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
    },
    getHorarios: async (req, res) => {
        const { dia } = req.query; 
        
        try {
            const horarios = await User.getHorarios(dia);
            
            if (horarios.message) { // Caso seja uma mensagem de erro
                return res.status(404).json(horarios);
            }

            res.status(200).json(horarios); // Caso sejam horários disponíveis
        } catch (error) {
            //console.error(error);
            console.log(false);
            res.status(500).json({ message: 'Erro ao buscar horários disponíveis' });
        }
    },
    createUser: async (req, res) => {
        const { nome, celular } = req.body;
        try {
            const newUser = await User.postNewUser(nome, celular);
            res.status(201).json(newUser);  // 201 Created
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar novo usuário' });
        }
    },updateHorario: async (req, res) => {
        const { data, hora } = req.body;
        try {
            const updatedHorario = await User.updateHorario(data, hora);
            if (updatedHorario) {
                res.status(200).json({
                    message: 'Horário atualizado com sucesso',
                    horarioId: updatedHorario.id
                });
            } else {
                res.status(404).json({ message: 'Horário não encontrado' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar o horário' });
        }
    },
    gerarHorarios: async (req, res) => {
        const { dia } = req.body; // Recebe o parâmetro 'dia' do corpo da requisição

        if (!dia) {
            return res.status(400).json({ message: "O campo 'dia' é obrigatório." });
        }

        try {
            await User.gerarHorarios(dia); // Chama o método no modelo para gerar horários
            res.status(201).json({ message: `Horários gerados com sucesso para o dia ${dia}.` });
        } catch (error) {
            console.error("Erro ao gerar horários:", error);
            res.status(500).json({ message: "Erro ao gerar horários." });
        }
    }
};

module.exports = UserController;
