function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
}

function drawBall(ctx, c) {
  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.beginPath();
  ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
  ctx.fill();
}

function draw(ctx) {
  const circle = new Circle(50, 55, 25);
  drawBall(ctx, circle);

  const circle2 = new Circle(50, 595, 25);
  drawBall(ctx, circle2);
}

function init() {
  const canvas = document.getElementById('bubbles');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    const timer = setInterval(draw, 10, ctx);
    return timer;
  }
}