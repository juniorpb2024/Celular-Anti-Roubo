document.addEventListener("DOMContentLoaded", () => {
  // Loader Animation
  const progressText = document.getElementById("progress-text");
  const circleProgress = document.querySelector(".circle-progress");
  let progress = 0;

  const interval = setInterval(() => {
    progress += 1;
    progressText.textContent = `${progress}%`;

    if (progress === 100) {
      clearInterval(interval);
    }
  }, 80); // Total 8 seconds

  // Botão piscante redirecionando
  const fixNowButton = document.getElementById("fix-now");
  fixNowButton.addEventListener("click", () => {
    window.location.href = "https://www.paguemenos.com.br";
  });
});
