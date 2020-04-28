class Snake {
  constructor() {
    this.color = 'white';
    this.reset();
  }

  dead() {
    for (let i = 0; i < this.total - 2; i++) {
      if (!this.tail[i]) continue;
      if (isColision(this.head, this.tail[i])) return true;
    }
    return false;
  }

  eat(fruit) {
    return isColision(this, fruit);
  }

  grow() {
    this.total++;
  }

  update() {
    this.newPosition();
    this.render();
    this.block = false;
  }

  get head() {
    return { x: this.x, y: this.y }
  }

  render() {
    this.tail[this.total] = this.head;
    for(let i = 0; i < this.total; i++) {
      const newPosition = this.tail[i + 1];
      if (newPosition) {
        this.tail[i] = newPosition;
        this.draw(newPosition);
      }
    }
  }

  reset() {
    this.x = Math.floor(COLUMNS/2);
    this.y = Math.floor(ROWS/2);
    this.vx = 0;
    this.vy = 0;
    this.total = SNAKE_SIZE;
    this.tail = [];
    this.block = false;
  }

  newPosition() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x >= COLUMNS) this.x = 0;
    else if (this.x < 0) this.x = COLUMNS;
    if (this.y >= ROWS) this.y = 0;
    else if (this.y < 0) this.y = ROWS;
  }

  move(direction) {
    if (this.block) return false
    if (direction === 'Up' && this.vy === 0) this.setVelocity(0, -1);
    else if (direction === 'Down' && this.vy === 0) this.setVelocity(0, 1);
    else if (direction === 'Left' && this.vx === 0) this.setVelocity(-1, 0);
    else if (direction === 'Right' && this.vx === 0) this.setVelocity(1, 0);
    return this.block;
  }

  setVelocity(vx, vy) {
    this.vx = vx;
    this.vy = vy;
    this.block = true;
  }

  draw({ x, y }) {
    drawBox(this.color, x, y);
  }
}