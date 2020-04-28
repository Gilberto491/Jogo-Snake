class Game {
  constructor(snake, fruit) {
    this.snake = snake;
    this.fruit = fruit;
    this.interval;
    this.running = false;
    this.update();
  }

  controller(event) {
    const direction = event.key.replace('Arrow', '');
    this.snake.move(direction);
    if (!this.running) this.start();
    else if (this.running && event.keyCode === SPACE_KEY_CODE) this.pause();
  }

  init() {
    document.addEventListener('keydown', e => this.controller(e));
  }
 
  start() {
    this.running = true;
    this.interval = window.setInterval(() => this.update(), 1000/FPS);
  }

  update() {
    this.render();
    this.fruit.update();
    this.snake.update();

    if (this.snake.eat(this.fruit)) {
      this.snake.grow();
      this.fruit.pickLocation(this.snake.tail);
    }

    if (this.snake.dead()) this.end();
  }

  render() {
    score.innerHTML = (this.snake.total - SNAKE_SIZE) * 10;
    drawBox('black', 0, 0, WIDTH, HEIGHT);
  }

  pause() {
    this.running = false;
    window.clearInterval(this.interval)
    score.innerHTML += ' (PAUSE)'
  }

  end() {
    this.running = false;
    this.snake.reset();
    this.fruit.pickLocation(this.snake.tail);
    this.update();
    score.innerHTML += ' (GAME OVER)'
    window.clearInterval(this.interval)
  }
}