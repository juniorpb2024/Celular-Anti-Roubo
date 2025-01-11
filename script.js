document.addEventListener("DOMContentLoaded", () => {
  // Elementos
  const quadro1 = document.getElementById("quadro1");
  const quadro2 = document.getElementById("quadro2");
  const realizarAnaliseButton = document.getElementById("realizar-analise");
  const fixNowButton = document.getElementById("fix-now");
  const progressText = document.getElementById("progress-text");
  const loader = document.querySelector(".loader");
  const warnings = document.querySelector(".warnings");
  const peopleOnline = document.getElementById("people-online");

  // Variáveis
  let progress = 0;

  // Exibir loader e avisos com atraso
  setTimeout(() => {
    loader.classList.remove("hidden");
    setTimeout(() => {
      warnings.classList.remove("hidden");
    }, 1000);
  }, 1000);

  // Animação do progresso
  const interval = setInterval(() => {
    progress += 1;
    progressText.textContent = `${progress}%`;

    if (progress === 100) {
      clearInterval(interval);
      quadro1.classList.remove("active");
      quadro2.classList.add("active");
    }
  }, 80);

  // Número de pessoas online aleatório
  const randomPeople = Math.floor(Math.random() * (199 - 67 + 1)) + 67;
  peopleOnline.textContent = randomPeople;

  // Redirecionamento para análise ao clicar no botão
  realizarAnaliseButton.addEventListener("click", () => {
    quadro1.classList.remove("active");
    quadro2.classList.add("active");
  });

  // Botão de correção
  fixNowButton.addEventListener("click", () => {
    window.location.href = "https://pay.monetizze.com.br/DPB327285";
  });
});
