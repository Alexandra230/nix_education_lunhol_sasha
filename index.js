let obj = { mark: 'BMW' };

Object.defineProperty(obj, 'model', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'X8',
});

console.log(obj); // {mark: 'BMW', model: 'X8'}
