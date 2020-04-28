class Fruit {
  constructor() {
    this.color = 'red';
    this.x = 0;
    this.y = 0;
    this.pickLocation();
  }

  pickLocation(obstacle = []) {
    const location = getRandonLocation();

    for (let item of obstacle) {
      if(isColision(item, location)) return this.pickLocation(obstacle);
    }

    this.x = location.x;
    this.y = location.y;
  }

  update() {
    this.render();
  }

  render() {
    drawBox(this.color, this.x, this.y);
  }
}