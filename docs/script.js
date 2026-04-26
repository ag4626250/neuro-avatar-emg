const video = document.getElementById("instruction-video");
const restartButton = document.getElementById("restart-video");

// Reinicia el vídeo para que el paciente pueda verlo de nuevo desde el principio.
restartButton.addEventListener("click", () => {
  video.currentTime = 0;
  video.play();
});
