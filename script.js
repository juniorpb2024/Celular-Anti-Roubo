document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const verification = document.getElementById("verification");
  const progress = document.getElementById("progress");
  const faqQuestions = document.querySelectorAll(".faq-question");

  let progressValue = 0;

  // Simular carregamento
  const interval = setInterval(() => {
    progressValue += Math.floor(Math.random() * 20) + 10; // Incremento aleatório
    if (progressValue > 100) progressValue = 100;

    progress.textContent = `${progressValue}%`;

    if (progressValue === 100) {
      clearInterval(interval);
      loader.classList.add("hidden");
      verification.classList.remove("hidden");
    }
  }, 500); // 5 segundos total

  // Mostrar/ocultar respostas no FAQ
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      answer.classList.toggle("hidden");
    });
  });
});
