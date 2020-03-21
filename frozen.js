function draw() {
  const canvas = document.getElementById('tutorial');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.beginPath();
    ctx.arc(100, 75, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.beginPath();
    ctx.arc(50, 55, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}
