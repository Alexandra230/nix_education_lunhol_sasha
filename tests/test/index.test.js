import { Calculator } from '../src/index.js';
import * as assert from 'assert';

describe('Calculator', function () {
  let calc = new Calculator();
  it('Sum', function () {
    assert.equal(calc.calculation(6, 2, 'sum'), 8);
    assert.equal(calc.calculation(6.2, 2, 'sum'), 'only integer numbers');
    assert.equal(calc.calculation('!@#$jbjbjb', 2, 'sum'), 'only integer numbers');
  });
  it('Minus', function () {
    assert.equal(calc.calculation(6, 2, 'minus'), 4);
    assert.equal(calc.calculation(1, 2, 'minus'), 'First number must be bigger');
  });
  it('Multiple', function () {
    assert.equal(calc.calculation(6, 2, 'multiple'), 12);
    assert.equal(calc.calculation(0, 2, 'multiple'), 0);
    assert.equal(calc.calculation(0, 2, 'multiple'), 0);
  });
  it('Division', function () {
    assert.equal(calc.calculation(6, 2, 'division'), 3);
    assert.equal(calc.calculation(0, 2, 'division'), 'U cant use 0');
    assert.equal(calc.calculation(6, 0, 'division'), 'U cant use 0');
  });
  it('Wrong option', function () {
    assert.equal(calc.calculation(6, 2, 'weer122'), 'No such operation');
  });
});
