import kaboom from "kaboom"

kaboom({
	backgroundAudio: true,
})

loadSound("outro", "sprites/outro.mp3")
loadSound("waiting", "sprites/waiting.mp3")

loadFont("font", "/sprites/font.ttf")

loadSprite("bean", "sprites/bean.png")
loadSprite("sky", "sprites/sky.png")
loadSprite("clouds", "sprites/far-clouds.png")
loadSprite("near-clouds", "sprites/near-clouds.png")
loadSprite("mountains", "sprites/mountains.png")
loadSprite("far-mountains", "sprites/far-mountains.png")
loadSprite("trees", "sprites/trees.png")
let initialScale = window.innerHeight / 240
let h = window.innerHeight
let w = window.innerWidth

let isOutro = false

const music = play("waiting", {
	loop: true,
	paused: true,
})

function addSky() {
	let xPosition = 0;
	let skyscale = w / 320
	add([
		sprite("sky"),
		scale(skyscale),
		pos(xPosition, 0),
		/* 				layer("bg"), */
	]);
}
function addClouds() {
	let xPosition = 0;
	while (xPosition < w) {
		add([
			sprite("clouds"),
			scale(initialScale),
			pos(xPosition, 0),
			/* 				layer("bg"), */
		]);
		xPosition += 128 * initialScale; // Move to the next sprite position
	}
	xPosition = 0;
	while (xPosition < w) {
		add([
			sprite("near-clouds"),
			scale(initialScale),
			pos(xPosition, 0),
			/* 				layer("bg"), */
		]);
		xPosition += 144 * initialScale; // Move to the next sprite position
	}
}
function addMountains() {
	let xPosition = 0;
	while (xPosition < w) {
		add([
			sprite("far-mountains"),
			scale(initialScale),
			pos(xPosition, 0),
			/* 				layer("bg"), */
		]);
		xPosition += 160 * initialScale; // Move to the next sprite position
	}
	xPosition = 0;
	while (xPosition < w) {
		add([
			sprite("mountains"),
			scale(initialScale),
			pos(xPosition, 0),
			/* 				layer("bg"), */
		]);
		xPosition += 320 * initialScale; // Move to the next sprite position
	}
}
function addTrees() {
	let xPosition = 0;
	while (xPosition < w) {
		add([
			sprite("trees"),
			scale(initialScale),
			pos(xPosition, 0),
			/* 				layer("bg"), */
		]);
		xPosition += 240 * initialScale; // Move to the next sprite position
	}
}

function drawCanvas() {
	initialScale = window.innerHeight / 240
	h = window.innerHeight
	w = window.innerWidth
	addSky()
	addClouds()
	addMountains()
	addTrees()
}
drawCanvas()

 function onSecond() {
	var date = new Date();
	var seconds = date.getSeconds();
	if ((seconds === 2) && (isOutro === false) ) {
		music.paused = true;
		isOutro = true
		const outro = play("outro", {
			loop: true,
			paused: false,
		})
		console.log(seconds);
	}

}


 onClick(() => music.paused = !music.paused)


/* Assuming you want to call the onUpdate function periodically, you might use setInterval
setInterval(onSecond, 1000); // Call onUpdate every second (1000 milliseconds)
 */
onResize(() => drawCanvas())

// Funzione per ottenere l'ora corrente nel formato hh:mm:ss
function getCurrentTime() {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');
	return `${hours}:${minutes}:${seconds}`;
  }
  
  // Aggiungi un testo per visualizzare l'ora
  const timeLabel = add([
	text(getCurrentTime(), {
	  font: "font", // Aggiungi la dimensione del font prima del nome del font
	}),
	color(6, 214, 216),
	pos(center()),
	scale(initialScale),
	anchor("center"),
	{
	  value: getCurrentTime(),
	},
  ]);

  // Aggiorna l'etichetta dell'ora ogni secondo
  const interval = 1;
  loop(interval, () => {
	timeLabel.text = getCurrentTime();
	onSecond()
  });
  