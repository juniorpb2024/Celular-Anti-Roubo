document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const analysis = document.getElementById("analysis");
  const progress = document.getElementById("progress");

  let progressValue = 0;

  const interval = setInterval(() => {
    progressValue += 10;
    progress.textContent = `${progressValue}%`;

    if (progressValue === 100) {
      clearInterval(interval);
      loader.classList.add("hidden");
      analysis.classList.remove("hidden");
    }
  }, 500); // 500ms for each step, total 5 seconds
});
