import { candidateArr } from './candidates.js';
// task 1////////////////////////////
const arr = ['Vasya', 'Petya', 'Alexey'];
function removeUser(arr, indx) {
  if (indx !== -1) {
    arr.splice(indx, 1);
  }
  return arr;
}
removeUser(arr, 1);
console.log(arr);
//////////////////////////////////////

// task 2////////////////////////////
const obj = { name: 'Vasya', age: 1 };
function getAllKeys(obj) {
  return Object.keys(obj);
}
console.log(getAllKeys(obj));
////////////////////////////////////

// task 3////////////////////////////
function getAllValues(obj) {
  return Object.values(obj);
}
console.log(getAllValues(obj)); /// ["Vasya", 1]
////////////////////////////////////

const test1 = {
  id: 3,
  name: 'Vasya',
};
const test2 = {
  id: 4,
  name: 'Katya',
};
const testarr = [
  {
    id: 1,
    name: 'Kolya',
  },
  {
    id: 2,
    name: 'Petya',
  },
];
// task 4////////////////////////////
function insertIntoarr(array, indx) {
  let bfr = testarr.findIndex((i) => i.id == indx);
  testarr.splice(bfr, -1, array);
  return testarr;
}
console.log(insertIntoarr(test1, 2));
console.log(insertIntoarr(test2, 1));
/////////////////////////////////////

// task 5////////////////////////////
class Candidate {
  constructor(per) {
    Object.assign(this, per);
  }
  state() {
    let res = this.address;
    return res.split(',').splice(2, 1).join('');
  }
}
const candidate = new Candidate(candidateArr[33]);
console.log(candidate.state());
/////////////////////////////////////

// task 6////////////////////////////

function getCompanyNames(arr) {
  let comp = [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    comp.push(arr[i].company);
  }

  comp.forEach((element) => {
    if (!res.includes(element)) {
      res.push(element);
    }
  });

  return res;
}
console.log(getCompanyNames(candidateArr));
/////////////////////////////////////////////

//task7/////////////////////////////////////
function getUsersByYear(year) {
  let bfr;
  let idArray = [];
  for (let i = 0; i < candidateArr.length; i++) {
    bfr = new Date(candidateArr[i].registered).getFullYear();
    if (year == bfr) {
      idArray.push(candidateArr[i]._id);
    }
  }
  console.log(idArray);
}
getUsersByYear(2017);
///////////////////////////////////////////////
let createCandArr = (arr) => {
  return arr.map((empl) => new Candidate(empl));
};
const candArr = createCandArr(candidateArr);
//task8/////////////////////////////////////
function getCondidatesByUnreadMsg(num) {
  let res = [];
  for (let i = 0; i < candArr.length; i++) {
    if (parseInt(candArr[i].greeting.match(/\d+/)) == num) {
      res.push(candArr[i]);
    }
  }
  console.log(res);
}
getCondidatesByUnreadMsg(8);
/////////////////////////////////////////////

//task9/////////////////////////////////////
function getCondidatesByGender(gender) {
  let res1 = [];
  for (let i = 0; i < candArr.length; i++) {
    if (candArr[i].gender === gender) {
      res1.push(candArr[i]);
    }
  }
  console.log(res1);
}
getCondidatesByGender('male');
///////////////////////////////////////////////

//task10//////////////////////////////////////
