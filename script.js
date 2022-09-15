import { DOM } from './DOM.js';

class Circle extends DOM {
  constructor(height, width) {
    super(window.document);
    this.spawnCircle(height, width);
  }
  spawnCircle(height, width) {
    this.document.body.innerHTML = '';
    const circle = this.document.createElement('div');
    circle.id = 'circle';
    circle.classList.add('circle');
    circle.style = `width:${width}px; height:${height}px;`;
    circle.style.background = 'red';
    circle.style['border-radius'] = '50%';
    circle.style.position = 'absolute';
    circle.style.left = '100px';
    this.document.body.appendChild(circle);
  }
  setClickAction() {
    const circle = this.document.getElementById('circle');
    circle.addEventListener('click', () => {
      this.circleMove(circle);
    });
  }
  circleMove(circle) {
    const left = parseInt(circle.style.left.replace('px', ''));
    circle.style.left = left + 100 + 'px';
  }
}

class Factory {
  static createFigure(figure, height, weigth) {
    try {
      return new figure(height, weigth);
    } catch (e) {
      throw new Error(e);
    }
  }
}
const factory = Factory.createFigure(Circle, 100, 100);
factory.setClickAction();
