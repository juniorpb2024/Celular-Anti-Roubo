document.addEventListener("DOMContentLoaded", () => {
    const sliderThumb = document.getElementById("slider-thumb");
    const sliderTrack = document.querySelector(".slider-track");
    const sliderPercent = document.querySelector(".slider-percent");

    let position = 0;
    const targetPosition = 27;

    const interval = setInterval(() => {
        if (position >= targetPosition) {
            clearInterval(interval);
            sliderPercent.style.opacity = "1"; // Mostra o 27% quando a barra para
            sliderPercent.style.left = `${position}%`; // Alinha com o ponto
        } else {
            position++;
            sliderThumb.style.left = `${position}%`;
            sliderTrack.style.width = `${position}%`;
        }
    }, 20); // Atualiza a cada 20ms
});
