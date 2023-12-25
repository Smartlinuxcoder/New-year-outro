import kaboom from "kaboom"

kaboom({

})

loadSprite("bean", "sprites/bean.png")
loadSprite("sky", "sprites/sky.png")
loadSprite("clouds", "sprites/far-clouds.png")
loadSprite("near-clouds", "sprites/near-clouds.png")
loadSprite("mountains", "sprites/mountains.png")
loadSprite("far-mountains", "sprites/far-mountains.png")
loadSprite("trees", "sprites/trees.png")
const initialScale = window.innerHeight / 240
const h = window.innerHeight
const w = window.innerWidth

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
addSky()
addClouds()
addMountains()
addTrees()
onClick(() => addKaboom(mousePos()))
