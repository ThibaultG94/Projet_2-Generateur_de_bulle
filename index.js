let counterWin = 0;
let counterLose = 0;

const bubbleGenerator = () => {
  const bubble = document.createElement("span");
  const size = Math.random() * 200 + 100 + "px";
  const countWin = document.querySelector(".win");
  const countLose = document.querySelector(".lose");

  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--y", Math.random() * 100 - 200 + "%");
  bubble.style.setProperty("--x", Math.random() * 100 + "%");

  bubble.addEventListener("click", () => {
    bubble.style.background = "red";
    bubble.style.height = "0px";
    counterWin += 1;
    countWin.textContent = counterWin;
  });

  setTimeout(() => {
    if (bubble.style.background == "red") {
      bubble.remove("span");
    } else {
      bubble.remove("span");
      counterLose += 1;
      countLose.textContent = counterLose;
    }
  }, 5000);

  // setTimeout(() => {
  //   bubble.remove("span");
  //   counterLose += 1;
  //   countLose.textContent = counterLose;
  // }, 8000);
};

setInterval(bubbleGenerator, 5000);
// while (counterLose < 10) {
//   bubbleGenerator();
// } else {
//   window.close();
// }
