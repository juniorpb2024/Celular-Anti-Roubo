document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const analysis = document.getElementById("analysis");
  const progress = document.getElementById("progress");

  let progressValue = 0;

  // Incremento gradual da porcentagem
  const interval = setInterval(() => {
    progressValue += Math.floor(Math.random() * 20) + 10; // Incremento aleatório (10 a 20%)
    if (progressValue > 100) progressValue = 100;

    progress.textContent = `${progressValue}%`;

    if (progressValue === 100) {
      clearInterval(interval);
      loader.classList.add("hidden");
      analysis.classList.remove("hidden");
    }
  }, 500); // Atualiza a cada 500ms (total ~5s)
});
