// Gerenciar as páginas e barra de progresso
const paginas = document.querySelectorAll('.pagina');
const avancarBtns = document.querySelectorAll('.avancar-btn');
const comecarBtn = document.getElementById('comecar-btn');

let paginaAtual = 0;

function mostrarPagina(indice) {
  paginas.forEach((pagina, i) => {
    pagina.classList.toggle('ativa', i === indice);
  });
}

comecarBtn.addEventListener('click', () => {
  paginaAtual++;
  mostrarPagina(paginaAtual);
});

avancarBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    paginaAtual++;
    if (paginaAtual < paginas.length) {
      mostrarPagina(paginaAtual);
    }
  });
});

// Inicializar a página
mostrarPagina(paginaAtual);
