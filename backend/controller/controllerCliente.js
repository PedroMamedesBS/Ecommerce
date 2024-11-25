const {Cliente} = require('../model/associacao')

const cadastrarCliente = async (req,res)=>{
    const valores = req.body
    console.log(valores)
    try{
        await Cliente.create(valores,{raw:true})
        res.status(201).json({message: "Cadastro efetuado com sucesso!"})
    }catch(err){
        console.error("Erro ao cadastrar Cliente!",err)
        res.status(500).json({message: "Erro ao cadastrar Cliente!"})
    }
}

const loginCliente = async (req, res) => {
    const dados = req.body;
    console.log("Dados recebidos:", dados);

    try {
        const cliente = await Cliente.findOne({
            where: { emailCliente: dados.emailCliente },
            raw: true,
        });

        if (!cliente) {
            console.log("Cliente não encontrado no banco de dados.");
            return res.status(404).json({ message: "Cliente não encontrado no banco de dados." });
        }

        console.log("Login realizado com sucesso!");
        res.status(200).json({ message: "Login realizado com sucesso!" });
    } catch (err) {
        console.error("Erro durante a consulta ao banco de dados:", err.message);
        res.status(500).json({ message: "Erro interno no servidor." });
    }
};


module.exports = { cadastrarCliente, loginCliente}