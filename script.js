document.addEventListener("DOMContentLoaded", () => {
  // Elementos
  const quadro1 = document.getElementById("quadro1");
  const quadro2 = document.getElementById("quadro2");
  const progressText = document.getElementById("progress-text");
  const fixNowButton = document.getElementById("fix-now");

  // Variáveis
  let progress = 0;

  // Loader Animation
  const interval = setInterval(() => {
    progress += 1;
    progressText.textContent = `${progress}%`;

    if (progress === 100) {
      clearInterval(interval);
      quadro1.classList.remove("active");
      quadro2.classList.add("active");
    }
  }, 80); // Total de 8 segundos

  // Redirecionamento do botão
  fixNowButton.addEventListener("click", () => {
    window.location.href = "https://www.paguemenos.com.br";
  });

  // Inicializar primeira página
  quadro1.classList.add("active");
});
