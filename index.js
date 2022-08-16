let counterWin = 0;
let counterLose = 0;
const countWin = document.querySelector(".win");
const looser = document.querySelector(".looser");
const winner = document.querySelector(".winner");
const countLose = document.querySelector(".lose");

const bubbleGenerator = () => {
  const bubble = document.createElement("span");
  let size = Math.random() * 400 + 175 + "px";

  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const varSize = () => {
    if (counterWin > 99) {
      size = Math.random() * 150 + 100 + "px";
    } else if (counterWin > 89) {
      size = Math.random() * 200 + 125 + "px";
    } else if (counterWin > 79) {
      size = Math.random() * 250 + 150 + "px";
    } else if (counterWin > 69) {
      size = Math.random() * 200 + 100 + "px";
    } else if (counterWin > 59) {
      size = Math.random() * 250 + 125 + "px";
    } else if (counterWin > 49) {
      size = Math.random() * 300 + 150 + "px";
    } else if (counterWin > 39) {
      size = Math.random() * 350 + 175 + "px";
    } else if (counterWin > 29) {
      size = Math.random() * 200 + 125 + "px";
    } else if (counterWin > 19) {
      size = Math.random() * 250 + 150 + "px";
    } else if (counterWin > 9) {
      size = Math.random() * 300 + 175 + "px";
    } else {
      Math.random() * 350 + 200 + "px";
    }
  };
  varSize();

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--y", Math.random() * 100 - 200 + "%");
  bubble.style.setProperty("--x", Math.random() * 0 + 40 + "%");

  const varSpeed = () => {
    if (counterWin > 90) {
      bubble.style.setProperty("--y", Math.random() * 100 - 500 + "%");
      bubble.style.setProperty("--x", Math.random() * 250 - 100 + "%");
    } else if (counterWin > 80) {
      bubble.style.setProperty("--y", Math.random() * 100 - 400 + "%");
      bubble.style.setProperty("--x", Math.random() * 200 - 80 + "%");
    } else if (counterWin > 70) {
      bubble.style.setProperty("--y", Math.random() * 100 - 500 + "%");
      bubble.style.setProperty("--x", Math.random() * 250 - 100 + "%");
    } else if (counterWin > 60) {
      bubble.style.setProperty("--y", Math.random() * 100 - 400 + "%");
      bubble.style.setProperty("--x", Math.random() * 200 - 80 + "%");
    } else if (counterWin > 50) {
      bubble.style.setProperty("--y", Math.random() * 100 - 300 + "%");
      bubble.style.setProperty("--x", Math.random() * 150 - 60 + "%");
    } else if (counterWin > 40) {
      bubble.style.setProperty("--y", Math.random() * 100 - 200 + "%");
      bubble.style.setProperty("--x", Math.random() * 100 - 40 + "%");
    } else if (counterWin > 30) {
      bubble.style.setProperty("--y", Math.random() * 100 - 850 + "%");
      bubble.style.setProperty("--x", Math.random() * 425 - 150 + "%");
    } else if (counterWin > 20) {
      bubble.style.setProperty("--y", Math.random() * 100 - 600 + "%");
      bubble.style.setProperty("--x", Math.random() * 300 - 100 + "%");
    } else if (counterWin > 10) {
      bubble.style.setProperty("--y", Math.random() * 100 - 350 + "%");
      bubble.style.setProperty("--x", Math.random() * 175 - 50 + "%");
    } else {
      bubble.style.setProperty("--y", Math.random() * 100 - 100 + "%");
      bubble.style.setProperty("--x", Math.random() * 100 - 0 + "%");
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
    if (counterWin > 99) {
      countLose.style.color = "green";
      document.body.style.background = "green";
      console.log("Gagné ! :)");
      winner.style.visibility = "visible";
      bubble.remove("span");
    } else if (counterWin > 80) {
      bubbleGenerator();
      bubbleGenerator();
      bubbleGenerator();
    } else if (counterWin > 40) {
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
