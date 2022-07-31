const array = [10, 5, 3, 12, 77];
function twoMinSum(mass) {
  let min1 = Math.min(...mass);
  mass.splice(mass.indexOf(min1), 1);
  let min2 = Math.min(...mass);
  result = min1 + min2;
  console.log(result);
}

twoMinSum(array);
