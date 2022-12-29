let counterWin = 0;
let counterLose = 0;
const countWin = document.querySelector('.win');
const looser = document.querySelector('.looser');
const winner = document.querySelector('.winner');
const countLose = document.querySelector('.lose');
const form = document.querySelector('form');
const form2 = document.querySelector('.form2');
let pseudo = '';
const inputName = document.querySelector('input[type="text"]');
const inputNameWin = document.querySelector('.form2 > input[type="text"]');
const bouton = document.querySelector('.btn');
const boutonWin = document.querySelector('.btn-win');
const inputLose = document.querySelector(".form1 > input[type='submit']");
const inputWin = document.querySelector(".form2 > input[type='submit']");
let size = 0;
let speed = 0;
let multi = 0;
score = counterWin - counterLose;
let bestScore;

if (localStorage.bestScore) {
	bestScore = localStorage.bestScore;
} else {
	bestScore = -100;
}

const bubbleGenerator = () => {
	const bubble = document.createElement('span');
	size = Math.random() * 400 + 175;

	bubble.classList.add('bubble');
	document.body.appendChild(bubble);

	const varProperty = () => {
		if (counterWin > 94) {
			size = 260 - Math.random() * 250;
			speed = 700 + Math.random() * 500;
		} else if (counterWin > 89) {
			size = 270 - Math.random() * 245;
			speed = 800 + Math.random() * 550;
		} else if (counterWin > 84) {
			size = 280 - Math.random() * 240;
			speed = 900 + Math.random() * 600;
		} else if (counterWin > 79) {
			size = 290 - Math.random() * 235;
			speed = 1000 + Math.random() * 650;
		} else if (counterWin > 74) {
			size = 300 - Math.random() * 230;
			speed = 1100 + Math.random() * 700;
		} else if (counterWin > 69) {
			size = 310 - Math.random() * 225;
			speed = 1200 + Math.random() * 750;
		} else if (counterWin > 64) {
			size = 320 - Math.random() * 220;
			speed = 1300 + Math.random() * 800;
		} else if (counterWin > 59) {
			size = 330 - Math.random() * 215;
			speed = 1400 + Math.random() * 850;
		} else if (counterWin > 54) {
			size = 340 - Math.random() * 210;
			speed = 1500 + Math.random() * 900;
		} else if (counterWin > 49) {
			size = 350 - Math.random() * 205;
			speed = 1600 + Math.random() * 950;
		} else if (counterWin > 44) {
			size = 360 - Math.random() * 195;
			speed = 1700 + Math.random() * 1000;
		} else if (counterWin > 39) {
			size = 370 - Math.random() * 190;
			speed = 1800 + Math.random() * 1050;
		} else if (counterWin > 34) {
			size = 380 - Math.random() * 185;
			speed = 1900 + Math.random() * 1100;
		} else if (counterWin > 29) {
			size = 390 - Math.random() * 180;
			speed = 2000 + Math.random() * 1150;
		} else if (counterWin > 24) {
			size = 400 - Math.random() * 175;
			speed = 2100 + Math.random() * 1200;
		} else if (counterWin > 19) {
			size = 410 - Math.random() * 170;
			speed = 2200 + Math.random() * 1250;
		} else if (counterWin > 14) {
			size = 420 - Math.random() * 165;
			speed = 2300 + Math.random() * 1300;
		} else if (counterWin > 9) {
			size = 430 - Math.random() * 160;
			speed = 2400 + Math.random() * 1350;
		} else if (counterWin > 4) {
			size = 440 - Math.random() * 155;
			speed = 2500 + Math.random() * 1400;
		} else {
			size = 450 - Math.random() * 150;
			speed = 2600 + Math.random() * 1450;
		}
	};

	varProperty();

	const varPropertyScore = () => {
		if (score < -90) {
			size = size + 300 + 'px';
			speed = speed + 3000 + 'ms';
		} else if (score < -75) {
			size = size + 200 + 'px';
			speed = speed + 2000 + 'ms';
		} else if (score < -60) {
			size = size + 190 + 'px';
			speed = speed + 1900 + 'ms';
		} else if (score < -50) {
			size = size + 180 + 'px';
			speed = speed + 1800 + 'ms';
		} else if (score < -45) {
			size = size + 170 + 'px';
			speed = speed + 1700 + 'ms';
		} else if (score < -40) {
			size = size + 160 + 'px';
			speed = speed + 1600 + 'ms';
		} else if (score < -35) {
			size = size + 150 + 'px';
			speed = speed + 1500 + 'ms';
		} else if (score < -30) {
			size = size + 140 + 'px';
			speed = speed + 1400 + 'ms';
		} else if (score < -25) {
			size = size + 130 + 'px';
			speed = speed + 1300 + 'ms';
		} else if (score < -20) {
			size = size + 120 + 'px';
			speed = speed + 1200 + 'ms';
		} else if (score < -15) {
			size = size + 110 + 'px';
			speed = speed + 1100 + 'ms';
		} else if (score < -10) {
			size = size + 100 + 'px';
			speed = speed + 1000 + 'ms';
		} else if (score < -8) {
			size = size + 90 + 'px';
			speed = speed + 900 + 'ms';
		} else if (score < -6) {
			size = size + 80 + 'px';
			speed = speed + 800 + 'ms';
		} else if (score < -4) {
			size = size + 70 + 'px';
			speed = speed + 700 + 'ms';
		} else if (score < -2) {
			size = size + 60 + 'px';
			speed = speed + 600 + 'ms';
		} else if (score < 0) {
			size = size + 50 + 'px';
			speed = speed + 500 + 'ms';
		} else if (score < 2) {
			size = size + 40 + 'px';
			speed = speed + 400 + 'ms';
		} else if (score < 4) {
			size = size + 30 + 'px';
			speed = speed + 300 + 'ms';
		} else if (score < 6) {
			size = size + 20 + 'px';
			speed = speed + 200 + 'ms';
		} else if (score < 8) {
			size = size + 10 + 'px';
			speed = speed + 100 + 'ms';
		} else if (score < 10) {
			size = size + 'px';
			speed = speed + 'ms';
		} else if (score < 15) {
			size = size - 10 + 'px';
			speed = speed - 50 + 'ms';
		} else if (score < 20) {
			size = size - 20 + 'px';
			speed = speed - 100 + 'ms';
		} else if (score < 25) {
			size = size - 30 + 'px';
			speed = speed - 150 + 'ms';
		} else if (score < 30) {
			size = size - 40 + 'px';
			speed = speed - 200 + 'ms';
		} else if (score < 35) {
			size = size - 50 + 'px';
			speed = speed - 250 + 'ms';
		} else if (score < 40) {
			size = size - 60 + 'px';
			speed = speed - 300 + 'ms';
		} else if (score < 45) {
			size = size - 70 + 'px';
			speed = speed - 350 + 'ms';
		} else if (score < 50) {
			size = size - 80 + 'px';
			speed = speed - 400 + 'ms';
		} else if (score < 55) {
			size = size - 90 + 'px';
			speed = speed - 450 + 'ms';
		} else if (score < 60) {
			size = size - 100 + 'px';
			speed = speed - 500 + 'ms';
		} else if (score < 65) {
			size = size - 110 + 'px';
			speed = speed - 550 + 'ms';
		} else if (score < 70) {
			size = size - 120 + 'px';
			speed = speed - 600 + 'ms';
		} else if (score < 80) {
			size = size - 130 + 'px';
			speed = speed - 610 + 'ms';
		} else if (score < 85) {
			size = size - 140 + 'px';
			speed = speed - 620 + 'ms';
		} else if (score < 90) {
			size = size - 150 + 'px';
			speed = speed - 630 + 'ms';
		} else if (score < 95) {
			size = size - 160 + 'px';
			speed = speed - 640 + 'ms';
		} else if (score < 100) {
			size = size - 170 + 'px';
			speed = speed - 650 + 'ms';
		} else {
			size = size + 'px';
			speed = speed + 'ms';
		}
	};

	varPropertyScore();
	bubble.style.height = size;
	bubble.style.width = size;

	bubble.style.top = Math.random() * 100 + 100 + '%';
	bubble.style.left = Math.random() * 100 + '%';

	bubble.style.setProperty('--y', Math.random() * 100 - 500 + 'px');
	bubble.style.setProperty('--x', Math.random() * 100 + '%');

	bubble.style.animationDuration = speed;

	bubble.addEventListener('click', () => {
		bubble.style.background = 'red';
		bubble.style.height = '0px';
		counterWin++;
		countWin.textContent = counterWin;
	});

	const timeOut = () => {
		if (speed < 1000 + 'ms') {
			console.log("C'est dans la poche");
		} else if (speed < 2000 + 'ms') {
			setTimeout(() => {
				if (bubble.style.background == 'red') {
					bubble.remove('span');
				} else {
					bubble.remove('span');
					counterLose++;
					countLose.textContent = counterLose;
				}
			}, 2000);
		} else if (speed < 3000 + 'ms') {
			setTimeout(() => {
				if (bubble.style.background == 'red') {
					bubble.remove('span');
				} else {
					bubble.remove('span');
					counterLose++;
					countLose.textContent = counterLose;
				}
			}, 3000);
		} else if (speed < 4000 + 'ms') {
			setTimeout(() => {
				if (bubble.style.background == 'red') {
					bubble.remove('span');
				} else {
					bubble.remove('span');
					counterLose++;
					countLose.textContent = counterLose;
				}
			}, 4000);
		} else if (speed < 5000 + 'ms') {
			setTimeout(() => {
				if (bubble.style.background == 'red') {
					bubble.remove('span');
				} else {
					bubble.remove('span');
					counterLose++;
					countLose.textContent = counterLose;
				}
			}, 5000);
		} else if (speed < 6000 + 'ms') {
			setTimeout(() => {
				if (bubble.style.background == 'red') {
					bubble.remove('span');
				} else {
					bubble.remove('span');
					counterLose++;
					countLose.textContent = counterLose;
				}
			}, 6000);
		} else if (speed < 7000 + 'ms') {
			setTimeout(() => {
				if (bubble.style.background == 'red') {
					bubble.remove('span');
				} else {
					bubble.remove('span');
					counterLose++;
					countLose.textContent = counterLose;
				}
			}, 7000);
		} else if (speed < 8000 + 'ms') {
			setTimeout(() => {
				if (bubble.style.background == 'red') {
					bubble.remove('span');
				} else {
					bubble.remove('span');
					counterLose++;
					countLose.textContent = counterLose;
				}
			}, 8000);
		} else if (speed < 10000 + 'ms') {
			setTimeout(() => {
				if (bubble.style.background == 'red') {
					bubble.remove('span');
				} else {
					bubble.remove('span');
					counterLose++;
					countLose.textContent = counterLose;
				}
			}, 10000);
		}
	};

	timeOut();
};

const bubblegame = () => {
	if (counterLose < 100 && counterWin < 100) {
		multi = Math.random() * 100;
		score = counterWin - counterLose;
		if (multi > 90 && score > 90) {
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
		} else if (multi > 80 && score > 80) {
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
		} else if (multi > 70 && score > 70) {
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
		} else if (multi > 60 && score > 60) {
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
		} else if (multi > 50 && score > 50) {
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
		} else if (multi > 40 && score > 40) {
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
		} else if ((multi > 30 && score > 30) || multi > 99) {
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
		} else if ((multi > 20 && score > 20) || multi > 90) {
			bubbleGenerator();
			bubbleGenerator();
			bubbleGenerator();
		} else if ((multi > 10 && score > 10) || multi > 50) {
			bubbleGenerator();
			bubbleGenerator();
		} else bubbleGenerator();
	} else if (counterLose > 99) {
		console.log('Perdu ! :(');
		looser.style.visibility = 'visible';
		const score = counterWin - counterLose;
		inputName.addEventListener('input', (e) => {
			pseudo = e.target.value;
			if (score > bestScore) {
				bestScore = score;
			}
		});

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			document.querySelector('form > div').innerHTML = `
        <h3><span class="score-lose">Nom : ${pseudo}<br/>Score : ${score}</span></h3>
        <h3>Désolé ${pseudo}, vous pouvez toujours retentez votre chance !</h3>
        <h4>Meilleure Score de ${pseudo} : ${bestScore}</h4>
        <h4>Meilleure Score du Jeu :</h4>
        <h3><span class="score-win">Thibault : 28</span></h3>
        `;
			bouton.style.visibility = 'visible';
			inputName.remove();
			inputLose.remove();
			localStorage.bestScore = bestScore;
		});
		setTimeout(() => {}, 600000);
	} else if (counterWin > 99) {
		console.log('Gagné ! :)');
		winner.style.visibility = 'visible';
		const score = counterWin - counterLose;
		inputNameWin.addEventListener('input', (e) => {
			pseudo = e.target.value;
			if (score > bestScore) {
				bestScore = score;
			}
		});

		form2.addEventListener('submit', (e) => {
			e.preventDefault();
			document.querySelector('.form2 > div').innerHTML = `
      <h3><span class="score-win">Nom : ${pseudo}<br/>Score : ${score}</span></h3>
      <h3>Bravo ${pseudo} ! Vous pouvez encore améliorer votre score !</h3>
      <h3>Meilleure Score de ${pseudo} : ${bestScore}</h3>
      <h3>Meilleure Score du Jeu :</h3>
      <h3><span class="score-win">Thibault : 28</span></h3>
        `;
			boutonWin.style.visibility = 'visible';
			inputNameWin.remove();
			inputWin.remove();
		});
		setTimeout(() => {}, 600000);
	} else {
		console.log('???');
	}
};

setInterval(bubblegame, 1000);

/******************************************************* */
