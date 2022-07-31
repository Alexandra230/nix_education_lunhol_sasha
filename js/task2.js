const amount = 9;

function getArray(num) {
  if (num % 3 == 0 && num !== 0) {
    let columns = 3;
    let rows = num / columns;

    let arr = new Array();
    for (let i = 0; i < rows; i++) {
      arr[i] = new Array();
      for (let j = 0; j < columns; j++) {
        arr[i][j] = i + j + 1; //что сюда поставить чтоб считало нормально?
      }
    }
    console.log(arr);
  } else {
    console.log('not a multiple of 3');
  }
}
getArray(amount);
