const medianNumber = 8;
console.log(medianNumber);
let k = 0;
while (k < medianNumber) {
  let line = '';
  let star = '';
  for (let i = 1; i < medianNumber - k; i++) {
    line += '-';
  }
  for (let i = 0; i < 2 * k + 1; i++) {
    star += '#';
  }
  console.log(line + star + line);
  k++;
}
