let counterWin = 0;
let counterLose = 0;
const countWin = document.querySelector(".win");
const looser = document.querySelector(".looser");

const bubbleGenerator = () => {
  const bubble = document.createElement("span");
  const size = Math.random() * 200 + 100 + "px";
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
  if (counterLose < 10) {
    console.log("Jeu en cours");
    bubbleGenerator();
  } else {
    countWin.style.color = "red";
    document.body.style.background = "red";
    console.log("Perdu ! :(");
    looser.style.visibility = "visible";
    setTimeout(() => {
      window.close();
    }, 60000);
  }
};

setInterval(bubblegame, 1000);

// do {
//   console.log("Ca marche!");
//   console.log(counterWin);
//   console.log(counterLose);
//   counterLose++;
//   setTimeout(() => {
//     bubbleGenerator();
//   }, 10000);
// } while (counterLose < 10);

// bubbleGenerator();
// setInterval(bubbleGenerator, 5000);
// while (counterLose < 10) {
//   bubbleGenerator();
// } else {
//   window.close();
// }

/******************************************************* */
