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

const loginCliente = async (req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const pesq = await Cliente.findOne({where:{emailCliente: dados.emailCliente}, raw:true})
        if(pesq === null){
            console.log("Cliente não encontrado no banco de dados") 
            res.status(404).json({message: "Cliente não encontrado no banco de dados"})
        }else if(pesq.emailCliente == dados.emailCliente){
            console.log("Login realizado com sucesso!")
            res.status(200).json({message:"Login realizado com sucesso!"})
        }else{
            console.log("Cliente não cadastrado!")
            res.status(500).json({message:"Cliente não cadastrado"})
        }
    }catch(err){
        console.error('Erro a consultar o Usuário!',err)
        res.status(500).json({message: 'Erro a consultar o Usuário!'})
    }
}

module.exports = { cadastrarCliente, loginCliente}