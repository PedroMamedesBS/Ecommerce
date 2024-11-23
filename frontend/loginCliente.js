// Seleção dos elementos
const btnLogin = document.getElementById('btnLogin');
const loginRes = document.getElementById('loginRes');

// Evento de clique para login
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();

  const emailCliente = document.getElementById('emailCliente').value;
  const senhaCliente = document.getElementById('senhaCliente').value;

  // Envia os dados para o servidor
  const loginData = {
    emailCliente: emailCliente,
    senhaCliente: senhaCliente
  };

  fetch('http://localhost:3000/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert("Login realizado com sucesso!");
      // Redireciona para a página inicial ou dashboard
      window.location.href = "./index.html";
    } else {
      loginRes.innerHTML = `<p style="color: red;">${data.message}</p>`;
    }
  })
  .catch((err) => {
    console.error("Erro ao realizar login!", err);
    loginRes.innerHTML = `<p style="color: red;">Erro ao realizar login. Tente novamente mais tarde.</p>`;
  });
});
