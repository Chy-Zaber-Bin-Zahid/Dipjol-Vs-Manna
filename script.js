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

// const description = document.querySelector(".description");
const cowAll = document.querySelectorAll(".cow");
const dipjol = document.querySelector(".dip");
const people = document.querySelector(".peo");

// Add click event listener to each button
cowAll.forEach((button) => {
  button.addEventListener("click", () => {
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
