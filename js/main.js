import { shedule } from './shedule.js';
let myShedule = [...shedule];

const table = document.querySelector('#shedule-table');

let minutes = [...table.querySelectorAll('.row')].map((n) => {
  return { elemId: n.id, from: n.id.split('-')[0], to: n.id.split('-')[1] };
});

myShedule.forEach((item) => {
  let findMin = minutes.findIndex((i) => {
    return i.from <= item.start && i.to > item.start;
  });
  let div = document.getElementById(`${minutes[findMin].elemId}`);
  let childDiv = document.createElement('div');
  childDiv.setAttribute('class', 'task');
  childDiv.innerText = item.title;
  childDiv.style.height = `${item.duration}px`;
  childDiv.style.top = `${item.start - minutes[findMin].from}px`;
  childDiv.style.background = `${
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  }`;
  div.appendChild(childDiv);
});
