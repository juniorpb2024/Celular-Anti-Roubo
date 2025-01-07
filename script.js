document.addEventListener("DOMContentLoaded", () => {
  const quadro1 = document.getElementById("quadro1");
  const quadro2 = document.getElementById("quadro2");
  const progressText = document.getElementById("progress-text");
  const fixNowButton = document.getElementById("fix-now");
  const loader = document.querySelector(".loader");
  const warnings = document.querySelector(".warnings");
  const peopleOnline = document.getElementById("people-online");

  let progress = 0;

  // Simular carregamento
  setTimeout(() => {
    loader.classList.remove("hidden");
    setTimeout(() => {
      warnings.classList.remove("hidden");
    }, 1000);
  }, 1000);

  const interval = setInterval(() => {
    progress += 5;
    progressText.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      quadro1.classList.remove("active");
      quadro2.classList.add("active");
    }
  }, 300);

  // Atualizar número de pessoas online
  const randomPeople = Math.floor(Math.random() * 100) + 50;
  peopleOnline.textContent = randomPeople;

  // Redirecionar ao clicar no botão
  fixNowButton.addEventListener("click", () => {
    window.location.href = "https://www.paguemenos.com.br";
  });
});
