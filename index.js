Array.prototype.map1 = function (func) {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    this[i] = func(this[i]);
  }
  return this;
};
const arr = [1, 2, 3, 4];
console.log(arr.map1((item) => item + 1));

for (let i = 0; i < 5; i++) {
  let btn = document.createElement('button');
  btn.textContent = `Click me ${i}`;
  btn.setAttribute('class', `btn${i}`);

  document.getElementById('wrapper').appendChild(btn);
}
