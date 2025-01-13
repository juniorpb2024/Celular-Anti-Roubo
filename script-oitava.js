document.addEventListener("DOMContentLoaded", () => {
    const sliderThumb = document.getElementById("slider-thumb");
    const sliderTrack = document.querySelector(".slider-track");
    const sliderPercent = document.querySelector(".slider-percent");

    let position = 0;
    const targetPosition = 27; // Posição final

    const interval = setInterval(() => {
        if (position >= targetPosition) {
            clearInterval(interval); // Para o movimento ao atingir o alvo
            sliderPercent.style.opacity = "1"; // Mostra o 27%
            sliderPercent.style.left = `${position}%`; // Posiciona abaixo do ponto
        } else {
            position++;
            sliderThumb.style.left = `${position}%`; // Move o ponto
            sliderTrack.style.width = `${position}%`; // Move a barra
        }
    }, 20); // Atualiza a cada 20ms
});
