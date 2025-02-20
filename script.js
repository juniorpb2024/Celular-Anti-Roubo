document.getElementById('consultaForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    const matricula = document.getElementById('matricula').value;
    const resultadoDiv = document.getElementById('resultado');

    // Limpa o resultado anterior
    resultadoDiv.innerHTML = '';

    // Faz a requisição à API
    fetch(`https://api.integrador.sp.gov.br/sabesp/faturas?matricula=${matricula}`, {
        headers: {
            'Authorization': 'Bearer SEU_TOKEN_AQUI' // Substitua pelo seu token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Exibe os dados da fatura
        resultadoDiv.innerHTML = `
            <h2>Dados da Fatura</h2>
            <p><strong>Matrícula:</strong> ${data.matricula}</p>
            <p><strong>Valor:</strong> R$ ${data.valor}</p>
            <p><strong>Vencimento:</strong> ${data.vencimento}</p>
            <p><strong>Consumo:</strong> ${data.consumo} m³</p>
        `;
    })
    .catch(error => {
        resultadoDiv.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
    });
});
