import { shedule } from './shedule.js';
const pxTomin = 2; //2px=1min
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
  childDiv.innerHTML = `<p>${item.title}</p>`;
  childDiv.style.height = `${item.duration * pxTomin}px`;
  childDiv.style.top = `${item.start * pxTomin - minutes[findMin].from * pxTomin}px`;
  div.appendChild(childDiv);
});
