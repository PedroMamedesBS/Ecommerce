// Função para adicionar produtos ao carrinho e salvar no localStorage
function addtoCart(nome, preco, imagem) {
    // Produto a ser adicionado
    const produto = {
      nome: nome,
      preco: preco,
      imagem: imagem,
      quantidade: 1 // Quantidade inicial do produto
    };
  
    // Recuperar carrinho existente do localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
    // Verificar se o produto já existe no carrinho
    const produtoExistente = carrinho.find(item => item.nome === nome);
  
    if (produtoExistente) {
      // Se já existir, incrementar a quantidade
      produtoExistente.quantidade += 1;
    } else {
      // Se não existir, adicionar o produto ao carrinho
      carrinho.push(produto);
    }
  
    // Atualizar o localStorage com o carrinho atualizado
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
    // Feedback para o usuário (opcional)
    alert(`Produto "${nome}" foi adicionado ao carrinho com sucesso!`);
  }
  
  // Função para recuperar produtos do localStorage (para exibir no carrinho)
  function obterCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho')) || [];
  }
  