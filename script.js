// Função para alternar para a próxima página
function mostrarProximaPagina() {
    // Esconde a página inicial
    document.getElementById('pagina-inicial').classList.remove('ativa');
    // Mostra a próxima página
    document.getElementById('proxima-pagina').classList.add('ativa');
}

// Função para continuar a partir da próxima página
function continuar() {
    alert("Continuando para o próximo passo...");
    // Insira aqui a lógica adicional que desejar
}
