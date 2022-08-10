const strConcat = () => {
  let a = '';
  return function strAlphabetSort(str) {
    if (str && typeof str == 'string') {
      a += str;
      console.log(a.split('').sort().join(''));
    } else {
      a = '';
      console.log(a);
    }
  };
};
const strAlphabetSort = strConcat();

strAlphabetSort('g');
strAlphabetSort('a');
strAlphabetSort(true);
strAlphabetSort('acbd');
strAlphabetSort('wqvmlprwsct5142');
strAlphabetSort([]);
strAlphabetSort(13);
strAlphabetSort('wprwsc');
strAlphabetSort('');
