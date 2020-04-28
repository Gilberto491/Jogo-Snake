function drawBox(color, column, row, w = SIZE, h = SIZE) {
  ctx.fillStyle = color;
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  const x = column * SIZE;
  const y = row * SIZE;
  ctx.fillRect(x, y, w, h);
  ctx.strokeRect(x, y, w, h);
}

function isColision(a, b) {
  return (a.x === b.x && a.y === b.y)
}

function getRandonLocation() {
  return {
    x: Math.floor((Math.random() * COLUMNS)),
    y: Math.floor((Math.random() * ROWS))
  }
}