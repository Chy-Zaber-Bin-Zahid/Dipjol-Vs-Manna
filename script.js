"use strict";

// selection part
const description = document.querySelector(".description");

function select(a) {
  if (a === "Dipjol") {
    description.textContent =
      "You are Acting as Dipjol. Now steal cow from people's farm!";
  } else {
    description.textContent =
      "You are Acting as Manna. Now retrieve cow from Dipjol's farm!";
  }
}

// cow part
let currentAudio = null;

function playSound(volume) {
  if (currentAudio) {
    // Pause the currently playing audio
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset to beginning
  }
  const audio = new Audio(
    "https://chy-zaber-bin-zahid.github.io/Dipjol-Vs-Manna/cowm.mp3"
  );
  audio.volume = volume;
  audio.play();
  currentAudio = audio;
}

// const description = document.querySelector(".description");
const cowAll = document.querySelectorAll(".cow");
const dipjol = document.querySelector(".dip");
const people = document.querySelector(".peo");

// Add click event listener to each button
cowAll.forEach((button) => {
  button.addEventListener("click", () => {
    playSound(0.5);
    if (
      description.textContent !== "" &&
      description.textContent ===
        "You are Acting as Dipjol. Now steal cow from people's farm!"
    ) {
      dipjol.appendChild(button);
    } else {
      people.appendChild(button);
    }
  });
});

//farm status check
const farm = () => {
  let dipFarm = document.querySelector(".dip");
  let peoFarm = document.querySelector(".peo");

  let dipImg = dipFarm.querySelector("img");
  let peoImg = peoFarm.querySelector("img");
  if (dipImg) {
    document.querySelector(".d").style.display = "none";
  } else {
    document.querySelector(".d").style.display = "block";
  }
  if (peoImg) {
    document.querySelector(".m").style.display = "none";
  } else {
    document.querySelector(".m").style.display = "block";
  }
};

setInterval(farm, 100);
