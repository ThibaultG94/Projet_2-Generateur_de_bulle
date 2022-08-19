let counterWin = 0;
let counterLose = 0;
const countWin = document.querySelector(".win");
const looser = document.querySelector(".looser");
const winner = document.querySelector(".winner");
const countLose = document.querySelector(".lose");
const form = document.querySelector("form");
const form2 = document.querySelector(".form2");
let pseudo = "";
const inputName = document.querySelector('input[type="text"]');
const inputNameWin = document.querySelector('.form2 > input[type="text"]');
const bouton = document.querySelector(".btn");
const boutonWin = document.querySelector(".btn-win");
const inputLose = document.querySelector(".form1 > input[type='submit']");
const inputWin = document.querySelector(".form2 > input[type='submit']");
let size = 0;
let speed = 0;

const bubbleGenerator = () => {
  const bubble = document.createElement("span");
  size = Math.random() * 400 + 175;
  score = counterWin - counterLose;

  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const varSize = () => {
    if (counterWin > 99) {
      size = Math.random() * 150 + 100;
    } else if (counterWin > 89) {
      size = Math.random() * 200 + 125;
    } else if (counterWin > 79) {
      size = Math.random() * 250 + 150;
    } else if (counterWin > 69) {
      size = Math.random() * 200 + 100;
    } else if (counterWin > 59) {
      size = Math.random() * 250 + 125;
    } else if (counterWin > 49) {
      size = Math.random() * 300 + 150;
    } else if (counterWin > 39) {
      size = Math.random() * 350 + 175;
    } else if (counterWin > 29) {
      size = Math.random() * 200 + 125;
    } else if (counterWin > 19) {
      size = Math.random() * 250 + 150;
    } else if (counterWin > 9) {
      size = Math.random() * 300 + 175;
    } else {
      size = Math.random() * 350 + 200;
    }
  };

  const varSizeScore = () => {
    if (score < -90) {
      varSize();
      size = size + 100 + "px";
    } else if (score < -80) {
      varSize();
      size = size + 90 + "px";
    } else if (score < -70) {
      varSize();
      size = size + 80 + "px";
    } else if (score < -60) {
      varSize();
      size = size + 70 + "px";
    } else if (score < -50) {
      varSize();
      size = size + 60 + "px";
    } else if (score < -40) {
      varSize();
      size = size + 50 + "px";
    } else if (score < -30) {
      varSize();
      size = size + 40 + "px";
    } else if (score < -20) {
      varSize();
      size = size + 30 + "px";
    } else if (score < -10) {
      varSize();
      size = size + 20 + "px";
    } else if (score < 0) {
      varSize();
      size = size + 10 + "px";
    } else if (score < 10) {
      varSize();
      size = size + "px";
    } else if (score < 20) {
      varSize();
      size = size - 10 + "px";
    } else if (score < 30) {
      varSize();
      size = size - 20 + "px";
    } else if (score < 40) {
      varSize();
      size = size - 30 + "px";
    } else if (score < 50) {
      varSize();
      size = size - 40 + "px";
    } else if (score < 60) {
      varSize();
      size = size - 50 + "px";
    } else if (score < 70) {
      varSize();
      size = size - 60 + "px";
    } else if (score < 80) {
      varSize();
      size = size - 70 + "px";
    } else if (score < 90) {
      varSize();
      size = size - 80 + "px";
    } else if (score < 100) {
      varSize();
      size = size - 90 + "px";
    } else {
      varSize();
      size = size + "px";
    }
  };

  varSizeScore();
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--y", Math.random() * 100 - 200 + "%");
  bubble.style.setProperty("--x", Math.random() * 0 + 40 + "%");

  bubble.style.setProperty("--y", Math.random() * 100 - 450 + "px");
  const plusMinus = Math.random() > 0.5 ? 1 : -1; // (If/else) -> Si le Math.random est supèrieur à 0.5, on renvoie 1, sinon on renvoie -1
  bubble.style.setProperty("--x", Math.random() * 100 * plusMinus + 50 + "%");

  const varSpeed = () => {
    if (counterWin > 90) {
      speed = 1666;
    } else if (counterWin > 80) {
      speed = 2500;
    } else if (counterWin > 70) {
      speed = 888;
    } else if (counterWin > 60) {
      speed = 1333;
    } else if (counterWin > 50) {
      speed = 2000;
    } else if (counterWin > 40) {
      bspeed = 3000;
    } else if (counterWin > 30) {
      speed = 1000;
    } else if (counterWin > 20) {
      speed = 1500;
    } else if (counterWin > 10) {
      speed = 2250;
    } else {
      speed = 3375;
    }
  };

  const varSpeedScore = () => {
    if (score < -90) {
      varSpeed();
      speed = speed + 1000 + "ms";
    } else if (score < -80) {
      varSpeed();
      speed = speed + 900 + "ms";
    } else if (score < -70) {
      varSpeed();
      speed = speed + 800 + "ms";
    } else if (score < -60) {
      varSpeed();
      speed = speed + 700 + "ms";
    } else if (score < -50) {
      varSpeed();
      speed = speed + 600 + "ms";
    } else if (score < -40) {
      varSpeed();
      speed = speed + 500 + "ms";
    } else if (score < -30) {
      varSpeed();
      speed = speed + 400 + "ms";
    } else if (score < -20) {
      varSpeed();
      speed = speed + 300;
      +"ms";
    } else if (score < -10) {
      varSpeed();
      speed = speed + 200 + "ms";
    } else if (score < 0) {
      varSpeed();
      speed = speed + 100 + "ms";
    } else if (score < 10) {
      varSpeed();
      speed = speed + "ms";
    } else if (score < 20) {
      varSpeed();
      speed = speed - 50 + "ms";
    } else if (score < 30) {
      varSpeed();
      speed = speed - 100 + "ms";
    } else if (score < 40) {
      varSpeed();
      speed = speed - 150 + "ms";
    } else if (score < 50) {
      varSpeed();
      speed = speed - 200 + "ms";
    } else if (score < 60) {
      varSpeed();
      speed = speed - 250 + "ms";
    } else if (score < 70) {
      varSpeed();
      speed = speed - 300 + "ms";
    } else if (score < 80) {
      varSpeed();
      speed = speed - 350 + "ms";
    } else if (score < 90) {
      varSpeed();
      speed = speed - 400 + "ms";
    } else if (score < 100) {
      varSpeed();
      speed = speed - 450 + "ms";
    } else {
      varSpeed();
      speed = speed + "ms";
    }
  };
  // varSpeed();
  varSpeedScore();
  bubble.style.animationDuration = speed;
  console.log(bubble.style.animationDuration);

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
  if (counterLose < 100 && counterWin < 100) {
    if (counterWin > 80) {
      bubbleGenerator();
      bubbleGenerator();
      bubbleGenerator();
    } else if (counterWin > 40) {
      bubbleGenerator();
      bubbleGenerator();
    } else console.log("Jeu en cours");
    bubbleGenerator();
  } else if (counterLose > 99) {
    console.log("Perdu ! :(");
    looser.style.visibility = "visible";
    const score = counterWin - counterLose;
    inputName.addEventListener("input", (e) => {
      pseudo = e.target.value;
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector("form > div").innerHTML = `
        <h3><span class="score-lose">Score : ${score}</span></h3>
        <h3>Désolé ${pseudo}, vous pouvez toujours retentez votre chance !</h3>
        `;
      bouton.style.visibility = "visible";
      inputName.remove();
      inputLose.remove();
    });
    setTimeout(() => {
      // window.close();
    }, 600000);
  } else if (counterWin > 99) {
    console.log("Gagné ! :)");
    winner.style.visibility = "visible";
    const score = counterWin - counterLose;
    inputNameWin.addEventListener("input", (e) => {
      pseudo = e.target.value;
    });

    form2.addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector(".form2 > div").innerHTML = `
      <h3><span class="score-win">Score : ${score}</span></h3>
      <h3>Bravo ${pseudo} ! Vous pouvez encore améliorer votre score !</h3>
        `;
      boutonWin.style.visibility = "visible";
      inputNameWin.remove();
      inputWin.remove();
    });
    setTimeout(() => {
      // window.close();
    }, 600000);
  } else {
    console.log("Je ne sais pas du tout ce qu'il se passe");
  }
};

setInterval(bubblegame, 1000);

/******************************************************* */
