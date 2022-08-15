let counterWin = 0;
let counterLose = 0;
const countWin = document.querySelector(".win");
const looser = document.querySelector(".looser");

const bubbleGenerator = () => {
  const bubble = document.createElement("span");
  let size = Math.random() * 400 + 175 + "px";
  const countLose = document.querySelector(".lose");

  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const varSize = () => {
    if (counterWin > 99) {
      size = Math.random() * 150 + 100 + "px";
    } else if (counterWin > 89) {
      size = Math.random() * 175 + 125 + "px";
    } else if (counterWin > 79) {
      size = Math.random() * 200 + 75 + "px";
    } else if (counterWin > 69) {
      size = Math.random() * 225 + 100 + "px";
    } else if (counterWin > 59) {
      size = Math.random() * 250 + 125 + "px";
    } else if (counterWin > 49) {
      size = Math.random() * 275 + 100 + "px";
    } else if (counterWin > 39) {
      size = Math.random() * 300 + 125 + "px";
    } else if (counterWin > 29) {
      size = Math.random() * 325 + 150 + "px";
    } else if (counterWin > 19) {
      size = Math.random() * 350 + 125 + "px";
    } else if (counterWin > 9) {
      size = Math.random() * 375 + 150 + "px";
    } else {
      Math.random() * 400 + 175 + "px";
    }
  };
  varSize();

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--y", Math.random() * 100 - 200 + "%");
  bubble.style.setProperty("--x", Math.random() * 100 + "%");

  const varSpeed = () => {
    if (counterWin > 90) {
      bubble.style.setProperty("--y", Math.random() * 100 - 350 + "%");
      bubble.style.setProperty("--x", Math.random() * 190 + -90 + "%");
    } else if (counterWin > 80) {
      bubble.style.setProperty("--y", Math.random() * 100 - 400 + "%");
      bubble.style.setProperty("--x", Math.random() * 180 + -80 + "%");
    } else if (counterWin > 70) {
      bubble.style.setProperty("--y", Math.random() * 100 - 350 + "%");
      bubble.style.setProperty("--x", Math.random() * 170 + -70 + "%");
    } else if (counterWin > 60) {
      bubble.style.setProperty("--y", Math.random() * 100 - 300 + "%");
      bubble.style.setProperty("--x", Math.random() * 160 + -60 + "%");
    } else if (counterWin > 50) {
      bubble.style.setProperty("--y", Math.random() * 100 - 350 + "%");
      bubble.style.setProperty("--x", Math.random() * 150 + -50 + "%");
    } else if (counterWin > 40) {
      bubble.style.setProperty("--y", Math.random() * 100 - 300 + "%");
      bubble.style.setProperty("--x", Math.random() * 140 + -40 + "%");
    } else if (counterWin > 30) {
      bubble.style.setProperty("--y", Math.random() * 100 - 250 + "%");
      bubble.style.setProperty("--x", Math.random() * 130 + -30 + "%");
    } else if (counterWin > 20) {
      bubble.style.setProperty("--y", Math.random() * 100 - 300 + "%");
      bubble.style.setProperty("--x", Math.random() * 120 + -20 + "%");
    } else if (counterWin > 10) {
      bubble.style.setProperty("--y", Math.random() * 100 - 250 + "%");
      bubble.style.setProperty("--x", Math.random() * 110 + -10 + "%");
    } else {
      bubble.style.setProperty("--y", Math.random() * 100 - 200 + "%");
      bubble.style.setProperty("--x", Math.random() * 100 + "%");
    }
  };

  varSpeed();

  bubble.addEventListener("click", () => {
    bubble.style.background = "red";
    bubble.style.height = "0px";
    counterWin++;
    countWin.textContent = counterWin;
  });

  setTimeout(() => {
    if (bubble.style.background == "red") {
      bubble.remove("span");
    } else {
      bubble.remove("span");
      counterLose++;
      countLose.textContent = counterLose;
    }
  }, 4000);
};

const bubblegame = () => {
  if (counterLose < 100) {
    if (counterWin > 90) {
      bubbleGenerator();
      bubbleGenerator();
      bubbleGenerator();
      bubbleGenerator();
    } else if (counterWin > 60) {
      bubbleGenerator();
      bubbleGenerator();
      bubbleGenerator();
    } else if (counterWin > 30) {
      bubbleGenerator();
      bubbleGenerator();
    } else console.log("Jeu en cours");
    bubbleGenerator();
  } else {
    countWin.style.color = "red";
    document.body.style.background = "red";
    console.log("Perdu ! :(");
    looser.style.visibility = "visible";
    setTimeout(() => {
      // window.close();
    }, 600000);
  }
};

setInterval(bubblegame, 1000);

/******************************************************* */
