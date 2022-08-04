class Car {
  #color = 'white';
  get color() {
    return this.#color;
  }

  set color(value) {
    this.#color = value;
  }
}

let car = new Car();
