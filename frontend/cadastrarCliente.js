let res = document.getElementById('res')
let cad_cli = document.getElementById('cad_cli')

cad_cli.addEventListener('click', ()=>{
    const nomeCliente = document.getElementById('nomeCliente').value
    const sobrenomeCliente = document.getElementById('sobrenomeCliente').value
    const cpfCliente = document.getElementById('cpfCliente').value
    const telefoneCliente = document.getElementById('telefoneCliente').value
    const emailCliente = document.getElementById('emailCliente').value
    const logradouro = document.getElementById('logradouro').value
    const numero = document.getElementById('numero').value
    const complemento = document.getElementById('complemento').value
    const bairro = document.getElementById('bairro').value
    const localidade = document.getElementById('localidade').value
    const uf = document.getElementById('uf').value
    const cep = document.getElementById('cep').value
    const statusCliente = document.getElementById('statusCliente').value

    const valores = {
        nomeCliente: nomeCliente,
        sobrenomeCliente: sobrenomeCliente,
        cpfCliente:cpfCliente,
        telefoneCliente: telefoneCliente,
        emailCliente: emailCliente,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        localidade: localidade,
        uf:uf,
        cep: cep,
        statusCliente: statusCliente
    }

    fetch('http://localhost:3000/cliente',{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resposta => resposta.json())
    .then(dd =>{
        res.innerHTML = dd.message
    })
    .catch((err)=>{
        console.error("Erro ao cadastrar cliente!",err)
    })
})