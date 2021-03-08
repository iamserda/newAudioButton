const button = document.getElementById("button");
const newAudio = new Audio(
  "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
);

button.addEventListener("click", (event) => {
  console.log(button.innerText);
  if (button.innerText === "Play") {
    newAudio.volume = 0.5;
    button.innerText = "Pause";
    console.log("Playing");
    newAudio.play();
  } else {
    console.log("Paused");

    newAudio.pause();
    button.innerText = "Play";
  }
});
