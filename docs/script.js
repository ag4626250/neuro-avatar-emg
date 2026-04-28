const video = document.getElementById("instruction-video");
const restartButton = document.getElementById("restart-video");

// Activa la pista por defecto si el navegador no respeta el atributo default.
if (video.textTracks.length > 0) {
  video.textTracks[0].mode = "showing";
}

// Reinicia el vídeo para que el paciente pueda verlo de nuevo desde el principio.
restartButton.addEventListener("click", () => {
  video.currentTime = 0;
  video.play();
});
