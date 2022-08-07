class CustomString {
  reverse(str) {
    return str.split('').reverse().join('');
  }
  ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  ucWords(str) {
    return str
      .split(' ')
      .map((x) => x[0].toUpperCase() + x.slice(1))
      .join(' ');
  }
}

const myString = new CustomString();
console.log(myString.reverse('qwerty qwerty'));
console.log(myString.ucFirst('qwerty qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty'));
