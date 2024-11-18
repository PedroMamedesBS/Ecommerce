let indiceAtual = 0;
const imagens = document.querySelectorAll('.carrossel img');
const totalImagens = imagens.length;

// Define quantas imagens mostrar por vez
const imagensPorVez = 3;

function mudarImagem(direcao) {
  // Calcula o novo índice inicial
  indiceAtual = indiceAtual + direcao;

  // Garante que o índice fique no intervalo correto
  if (indiceAtual < 0) {
    indiceAtual = totalImagens - imagensPorVez;
  } else if (indiceAtual > totalImagens - imagensPorVez) {
    indiceAtual = 0;
  }

  // Calcula a largura total que o carrossel deve deslizar
  const larguraImagem = imagens[0].clientWidth;
  const deslocamento = -(larguraImagem * indiceAtual);
  document.querySelector('.carrossel').style.transform = `translateX(${deslocamento}px)`;
}
