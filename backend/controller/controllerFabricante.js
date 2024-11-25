const {Fabricante} = require('../model/associacao')

const cadastrarFabricante = async (req,res)=>{
    const valores = req.body
    console.log(valores)
    try{
        await Fabricante.create(valores,{raw:true})
        res.status(201).json({message: "Cadastro efetuado com sucesso!"})
    }catch(err){
        console.error("Erro ao cadastrar fabricante!",err)
        res.status(500).json({message: "Erro ao cadastrar fabricante!"})
    }
}

const loginFabricante = async (req, res) => {
    const dados = req.body;
    console.log("Dados recebidos:", dados);

    try {
        const fabricante = await Fabricante.findOne({
            where: { emailFabricante: dados.emailFabricante },
            raw: true,
        });

        if (!fabricante) {
            console.log("fabricante não encontrado no banco de dados.");
            return res.status(404).json({ message: "fabricante não encontrado no banco de dados." });
        }

        console.log("Login realizado com sucesso!");
        res.status(200).json({ message: "Login realizado com sucesso!" });
    } catch (err) {
        console.error("Erro durante a consulta ao banco de dados:", err.message);
        res.status(500).json({ message: "Erro interno no servidor." });
    }
};

module.exports ={cadastrarFabricante, loginFabricante}