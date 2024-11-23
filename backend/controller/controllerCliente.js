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

module.exports = { cadastrarCliente}