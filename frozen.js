const dx = 1;
const dy = 1;
const radius = 25;

let started = false;

const circle = new Circle(50, 55, radius);
const circle2 = new Circle(50, 595, radius);

const circles = new Circles();
circles.add(circle)
circles.add(circle2)

function Circles() {
  this.circles = [];

  this.add = function (circle) {
    this.circles.push(circle)
  };
}

function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
}

function addNewCircle() {
  circles.add(new Circle(50, 595, radius))
}

function doKeyDown(e) {
  if (e.keyCode == 32) {
    started = true;
  }
}

function drawBall(ctx, c) {
  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.beginPath();
  ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
  ctx.fill();
}

function draw(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(ctx, circles.circles[0]);
  drawBall(ctx, circles.circles[1]);
  circles.circles.forEach(c => {
    drawBall(ctx, c)
  })

  if (started) {
    addNewCircle()
    if (circle2.y - 2 * radius - circle.y > 0) {
      circle2.y += -dy;
    }
  }
}

function init() {
  window.addEventListener("keydown", doKeyDown, false);
  const canvas = document.getElementById('bubbles');
  if (canvas.getContext) {
    const timer = setInterval(draw, 10, canvas);
    return timer;
  }
}