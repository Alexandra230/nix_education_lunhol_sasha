import { LocalStorageService } from './localStorage.js';
import { loadEvents } from './main.js';

const ls = new LocalStorageService();
let form = document.getElementById('modal-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let nameEv = document.getElementById('eventName').value;
  let from = document.getElementById('start').value;
  let to = document.getElementById('end').value;

  if (checkName(nameEv) && checkTime(from, to)) {
    let itemsInStorage = ls.get('events');
    let fromHH = from.split(':').splice(0, 1);
    let fromMM = from.split(':').splice(1, 1);
    let toHH = to.split(':').splice(0, 1);
    let toMM = to.split(':').splice(1, 1);
    let fromTime = Number(fromHH) * 60 + Number(fromMM);
    let toTime = Number(toHH) * 60 + Number(toMM);
    let newDuratuin = toTime - fromTime;
    let newStart = fromTime - 480;
    let newEvent = {
      start: newStart,
      duration: newDuratuin,
      title: nameEv,
    };
    itemsInStorage.push(newEvent);
    loadEvents([newEvent]);
    ls.set('events', itemsInStorage);
    if (modal.style.display === 'block') {
      modal.style.display = 'none';
    } else {
      modal.style.display = 'block';
    }
  } else {
    console.log('goat');
  }
});
function checkName(name) {
  return /^[a-zA-Z\s]+$/.test(name);
}
function checkTime(start, end) {
  let reg = /^([0][8-9](:[0-5]\d)|1[0-6](:[0-5]\d)|1[7](:0[0]))$/;
  let checkStart = reg.test(start);
  let checkEnd = reg.test(end);
  if (checkStart && checkEnd) {
    let fromHH = start.split(':').splice(0, 1);
    let fromMM = start.split(':').splice(1, 1);
    let toHH = end.split(':').splice(0, 1);
    let toMM = end.split(':').splice(1, 1);
    if (fromHH < toHH) {
      return true;
    } else if (Number(fromHH) == Number(toHH)) {
      if (fromMM < toMM) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    alert('Enter valid time HH:MM, start time must be smaller than end');
  }
}
