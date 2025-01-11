document.addEventListener("DOMContentLoaded", () => {
  const iniciarTesteButton = document.getElementById("iniciar-teste");
  const progressText = document.getElementById("progress-text");
  const progressBar = document.querySelector(".progress");
  let progress = 0;

  iniciarTesteButton.addEventListener("click", () => {
    document.getElementById("primeira-pagina").classList.remove("active");
    document.getElementById("quadro1").classList.add("active");

    const interval = setInterval(() => {
      progress += 1;
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${progress}%`;

      if (progress === 100) {
        clearInterval(interval);
        document.getElementById("quadro1").classList.remove("active");
        document.getElementById("quadro2").classList.add("active");
      }
    }, 80);
  });

  const randomPeople = Math.floor(Math.random() * (200 - 67 + 1)) + 67;
  document.getElementById("people-online").textContent = randomPeople;
});
