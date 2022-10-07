export class Calculator {
  result;
  constructor(a, b, op) {
    this.a = a;
    this.b = b;
    this.op = op;
  }
  calculation(a, b, op) {
    let test = /\D/;
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      this.result = 'only integer numbers';
      return this.result;
    } else if (test.test(a)) {
      this.result = 'only numbers';
      return this.result;
    } else {
      switch (op) {
        case 'sum':
          this.result = a + b;

          break;
        case 'minus':
          if (a < b) {
            this.result = 'First number must be bigger';
          } else {
            this.result = a - b;
          }
          break;
        case 'multiple':
          if (a == 0 || b == 0) {
            this.result = 0;
          } else {
            this.result = a * b;
          }

          break;

        case 'division':
          if (a == 0 || b == 0) {
            this.result = 'U cant use 0';
          } else {
            this.result = a / b;
          }

          break;
        default:
          this.result = 'No such operation';
          break;
      }
      return this.result;
    }
  }
}
const calc = new Calculator();
console.log(calc.calculation('!#', 2, 'sum'));
console.log(calc.calculation(6, 2, 'sum'));
console.log(calc.calculation(6.2, 2, 'sum'));
console.log(calc.calculation(6, 2, 'ddddd'));
console.log(calc.calculation(6, 2, 'minus'));
console.log(calc.calculation(6, 2, 'multiple'));
console.log(calc.calculation(6, 2, 'division'));
