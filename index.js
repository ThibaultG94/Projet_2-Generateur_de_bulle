let counterWin = 0;
let counterLose = 0;
const countWin = document.querySelector(".win");
const looser = document.querySelector(".looser");

const bubbleGenerator = () => {
  const bubble = document.createElement("span");
  let size = Math.random() * 200 + 100 + "px";
  const countLose = document.querySelector(".lose");

  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const varSize = () => {
    if (counterWin > 99) {
      size = Math.random() * 100 + "px";
    } else if (counterWin > 89) {
      size = Math.random() * 110 + 10 + "px";
    } else if (counterWin > 79) {
      size = Math.random() * 120 + 20 + "px";
    } else if (counterWin > 69) {
      size = Math.random() * 130 + 30 + "px";
    } else if (counterWin > 59) {
      size = Math.random() * 140 + 40 + "px";
    } else if (counterWin > 49) {
      size = Math.random() * 150 + 50 + "px";
    } else if (counterWin > 39) {
      size = Math.random() * 160 + 60 + "px";
    } else if (counterWin > 29) {
      size = Math.random() * 170 + 70 + "px";
    } else if (counterWin > 19) {
      size = Math.random() * 180 + 80 + "px";
    } else if (counterWin > 9) {
      size = Math.random() * 190 + 90 + "px";
    } else {
      Math.random() * 200 + 100 + "px";
    }
  };
  varSize();

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--y", Math.random() * 100 - 200 + "%");
  bubble.style.setProperty("--x", Math.random() * 100 + "%");

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
  }, 5000);
};

const bubblegame = () => {
  if (counterLose < 1000) {
    console.log("Jeu en cours");
    bubbleGenerator();
  } else {
    countWin.style.color = "red";
    document.body.style.background = "red";
    console.log("Perdu ! :(");
    looser.style.visibility = "visible";
    setTimeout(() => {
      window.close();
    }, 600000);
  }
};

setInterval(bubblegame, 1000);

/******************************************************* */
