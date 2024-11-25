btnLogin.addEventListener('click', async (event) => {
    event.preventDefault();
  
    const emailFabricante = document.getElementById('emailFabricante').value;
  
    if (!emailFabricante) {
      res.textContent = 'Por favor, insira seu e-mail.';
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/loginfab', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailFabricante }),
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        alert(data.message);
        window.location.href = './index.html'; // Redireciona após sucesso
      } else {
        res.textContent = data.message; // Exibe a mensagem de erro
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      res.textContent = 'Erro ao realizar login. Tente novamente mais tarde.';
    }
  });
  