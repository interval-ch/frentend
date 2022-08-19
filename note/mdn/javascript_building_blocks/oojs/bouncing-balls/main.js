// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// added by hand
class Ball {
	constructor(x, y, velX, velY, color, size) {
		this.x = x;
		this.y = y;
		this.velX = velX;
		this.velY = velY;
		this.color = color;
		this.size = size;
	}

	draw() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.fill();
	}

	update() {
		if ((this.x + this.size) >= width) { //撞到右邊
			this.velX = -(this.velX); //加速度相反
		}

		if ((this.x - this.size) <= 0) {
			this.velX = -(this.velX);
		}

		if ((this.y + this.size) >= length) {
			this.velY = -(this.velY);
		}

		if ((this.y - this.size) <= 0) {
			this.velY = -(this.velY);
		}

		this.x += this.velX;
		this.y += this.velY;
	}
}