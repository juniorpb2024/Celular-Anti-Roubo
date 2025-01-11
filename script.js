// Função para renderizar o conteúdo da página inicial
function renderHome() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <header class="header">
            <img src="https://github.com/user-attachments/assets/bb4c9e83-4c02-4c77-bc20-d68b61cfec70" alt="Segurança Antifurto - Proteja seus dados" class="banner">
        </header>
        <main class="main-content">
            <h1>Bem-vindo</h1>
            <p>Seu celular está realmente seguro?<br>Descubra em 60 segundos!</p>
            <p>Inicie o teste.</p>
            <button class="test-button" onclick="renderNoticia()">INICIAR TESTE DE SEGURANÇA GRÁTIS</button>
            <div class="secure-badge">
                <img src="https://github.com/user-attachments/assets/5f2ed92a-9dac-4fcd-9cfa-f59b58ef299f" alt="Navegação Segura - Google">
            </div>
        </main>
        <footer class="footer">
            <p class="terms">Ao clicar em alguma das opções, você concorda com os:</p>
            <a href="#" class="footer-link">Termos de utilização e serviço</a>
        </footer>
    `;
}

// Função para renderizar a página "notícia"
function renderNoticia() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <header class="header">
            <img src="https://github.com/user-attachments/assets/bb4c9e83-4c02-4c77-bc20-d68b61cfec70" alt="Segurança Digital - Banner" class="banner">
        </header>
        <main class="main-content">
            <div class="news-image">
                <img src="placeholder.jpg" alt="Notícia sobre segurança" class="news-placeholder">
            </div>
            <button class="test-button" onclick="continuar()">Continuar</button>
        </main>
        <footer class="footer">
            <p class="terms">Ao clicar em alguma das opções, você concorda com os:</p>
            <a href="#" class="footer-link">Termos de utilização e serviço</a>
        </footer>
    `;
}

// Função para continuar o fluxo
function continuar() {
    alert("Continuando para a próxima etapa...");
    // Substitua pelo redirecionamento desejado
    window.location.href = "https://seusite.com/proxima-etapa";
}

// Carrega a página inicial ao abrir o site
renderHome();
