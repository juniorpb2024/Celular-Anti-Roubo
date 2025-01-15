document.addEventListener("DOMContentLoaded", () => {
    const sliderThumb = document.getElementById("slider-thumb");
    const sliderTrack = document.getElementById("slider-track");
    const tooltip = document.getElementById("tooltip");

    const targetPosition = 27; // Posição final
    sliderThumb.style.left = `${targetPosition}%`;
    sliderTrack.style.width = `${targetPosition}%`;
    tooltip.style.left = `${targetPosition}%`;
});
