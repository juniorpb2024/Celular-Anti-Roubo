function navegarParaNoticia() {
    document.getElementById("pagina-inicial").classList.add("hidden");
    document.getElementById("noticia").classList.remove("hidden");
}

function continuar() {
    alert("Você será redirecionado para a próxima etapa.");
    window.location.href = "https://www.paguemenos.com.br";
}
