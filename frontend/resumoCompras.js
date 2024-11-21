// Função para exibir os itens do carrinho na página
function carregarCarrinho() {
    // Recupera os itens do Local Storage
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoItensDiv = document.getElementById('carrinho-itens');
    const carrinhoTotalSpan = document.getElementById('carrinho-total');

    // Limpa a exibição atual
    carrinhoItensDiv.innerHTML = '';

    if (carrinho.length === 0) {
        // Caso o carrinho esteja vazio
        carrinhoItensDiv.innerHTML = '<p>O carrinho está vazio.</p>';
        carrinhoTotalSpan.textContent = 'R$ 0,00';
        return;
    }

    let total = 0;

    // Exibe cada item no carrinho
    carrinho.forEach((produto, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carrinho-item');

        itemDiv.innerHTML = `
            <div class="carrinho-item-detalhes">
                <img src="${produto.imagem}" alt="${produto.nome}" class="carrinho-item-imagem" style="width: 80px; height: 80px;">
                <div>
                    <p><strong>${produto.nome}</strong></p>
                    <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                </div>
            </div>
            <button class="remover-item" onclick="removerDoCarrinho(${index})">Remover</button>
        `;

        carrinhoItensDiv.appendChild(itemDiv);
        total += produto.preco;
    });

    // Atualiza o valor total
    carrinhoTotalSpan.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1); // Remove o item selecionado
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o Local Storage
    carregarCarrinho(); // Atualiza a exibição
}

// Carregar os itens do carrinho ao abrir a página
document.addEventListener('DOMContentLoaded', carregarCarrinho);



document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', () => {
        sideNav.classList.add('open'); 
    });

    closeBtn.addEventListener('click', () => {
        sideNav.classList.remove('open'); 
    });

    window.addEventListener('click', (event) => {
        if (event.target === sideNav) {
            sideNav.classList.remove('open');
        }
    });
});