import { candidateArr } from './candidates.js';

class Candidate {
  constructor(per) {
    this.phone = per.phone;
  }
}
let createCandArr = (arr) => {
  return arr.map((empl) => new Candidate(empl));
};
const candArr = createCandArr(candidateArr);
////////////////////TASK1/////////////////////////////
const searchCandidatesByPhoneNumber = (tel) => {
  let res = [];
  if (!tel || !/^([+]?[0-9\s-\(\)]{0,11})*$/i.test(tel)) {
    return 'NAN';
  } else {
    for (let i = 0; i < candArr.length; i++) {
      if (candArr[i].phone.replace(/[^\d]/g, '').includes(tel.replace(/[^\d]/g, ''))) {
        res.push(candArr[i]);
      }
    }
    return res;
  }
};

console.log(searchCandidatesByPhoneNumber('43'));
/// [Candidate, Candidate, Candidate ...]

console.log(searchCandidatesByPhoneNumber('+1(869) 40'));
/// [Candidate, Candidate ...]

console.log(searchCandidatesByPhoneNumber('808'));
/// [Candidate, Candidate, Candidate ...]

console.log(searchCandidatesByPhoneNumber('+1(869)408-39-82'));
/// [Candidate]
///////////////////////////////////////////////////////////////////

////////////////////////////TASK2/////////////////////////////////////
const getCandidateById = (id) => {
  for (let i = 0; i < candidateArr.length; i++) {
    if (candidateArr[i]._id == id) {
      let reg = new Date(candidateArr[i].registered);
      var dd = reg.getDate();
      if (dd < 10) dd = '0' + dd;

      var mm = reg.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;

      var yy = reg.getFullYear() % 100;
      if (yy < 10) yy = '0' + yy;

      candidateArr[i].registered = `${dd}/${mm}/${yy}`;
      return candidateArr[i];
    }
  }
};

console.log(getCandidateById('5e216bc9f51c08c39c3ed006'));
///////////////////////TASK3///////////////////////////////

const sortCandidatesArr = (sortBy) => {
  if (sortBy === 'asc') {
    return candidateArr.sort((a, b) => {
      return parseInt(a.balance.replace(/[^\d]/g, '')) - parseInt(b.balance.replace(/[^\d]/g, ''));
    });
  } else if (sortBy === 'desc') {
    return candidateArr.sort((a, b) => {
      return parseInt(b.balance.replace(/[^\d]/g, '')) - parseInt(a.balance.replace(/[^\d]/g, ''));
    });
  } else if (!sortBy) {
    return candidateArr.sort((a, b) => {
      return parseInt(b.index) - parseInt(a.index);
    });
  }
};

console.log(sortCandidatesArr('asc'));
// отсортирует по-возростанию и вернет отсортированный массив

// console.log(sortCandidatesArr('desc'));
// // отсортирует по-убыванию и вернет отсортированный массив

// console.log(sortCandidatesArr());
// // не будет сортировать, а просто вернет первоначальный массив

////////////////////////////////////////////////////////////////////

////////////////////////TASK4////////////////////////////////////
const result = {};
const getEyeColorMap = () => {
  candidateArr.map((candidate) => {
    if (!result[candidate.eyeColor]) {
      result[candidate.eyeColor] = [candidate];
    } else {
      result[candidate.eyeColor].push(candidate);
    }
  });
  console.log(result);
};

getEyeColorMap();
// {
//    grey:  [Candidate, Candidate, Candidate, Candidate ...],
//    blue:  [Candidate, Candidate, Candidate, ...],
//    green: [Candidate, Candidate, Candidate, Candidate, Candidate ...]
//    ... etc.
// }
