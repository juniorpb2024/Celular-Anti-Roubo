document.addEventListener("DOMContentLoaded", () => {
  // Elementos
  const quadro1 = document.getElementById("quadro1");
  const quadro2 = document.getElementById("quadro2");
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");
  const fixNowButton = document.getElementById("fix-now");

  let progress = 0;

  // Animação do progresso
  const interval = setInterval(() => {
    progress += 1;
    progressText.textContent = `${progress}%`;
    progressBar.style.width = `${progress}%`;

    if (progress === 100) {
      clearInterval(interval);
      quadro1.classList.remove("active");
      quadro2.classList.add("active");
    }
  }, 80); // Total 8 segundos

  // Botão de redirecionamento
  fixNowButton.addEventListener("click", () => {
    window.location.href = "https://www.paguemenos.com.br";
  });
});
