function iniciarTeste() {
    // Cria a nova página dinamicamente
    const newPage = window.open('', '_blank');
    newPage.document.write(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Segurança Antifurto - Nova Página</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body class="new-page">
            <div class="container">
                <header class="header">
                    <img src="https://github.com/user-attachments/assets/bb4c9e83-4c02-4c77-bc20-d68b61cfec70" alt="Segurança Antifurto - Proteja seus dados" class="banner">
                </header>
                <main class="main-content">
                    <h1 class="welcome">Bem-vindo</h1>
                    <p>Este é o próximo passo do seu teste de segurança.</p>
                </main>
                <footer class="footer">
                    <p class="terms">Ao clicar em alguma das opções, você concorda com os:</p>
                    <ul class="links">
                        <li><a href="#">Termos de utilização e serviço</a></li>
                    </ul>
                </footer>
            </div>
        </body>
        </html>
    `);
}
