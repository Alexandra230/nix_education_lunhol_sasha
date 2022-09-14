import { shedule } from './shedule.js';
import { LocalStorageService } from './localStorage.js';

const ls = new LocalStorageService();
let storageEvents = ls.get('events') || [];
const pxTomin = 2; //2px=1min
let myShedule = [...shedule];
let itemsInStorage = ls.get('events');

const table = document.querySelector('#shedule-table');

let minutes = [...table.querySelectorAll('.row')].map((n) => {
  return { elemId: n.id, from: n.id.split('-')[0], to: n.id.split('-')[1] };
});

if (itemsInStorage && itemsInStorage.length > 0) {
  loadEvents();
} else {
  addEventsToLS();
}
function addEventsToLS() {
  for (let i = 0; i < myShedule.length; i++) {
    storageEvents.push(myShedule[i]);
    ls.set('events', storageEvents);
  }
}
function loadEvents() {
  itemsInStorage.forEach((item) => {
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
}
