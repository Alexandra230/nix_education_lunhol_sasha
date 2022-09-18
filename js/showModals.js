import { LocalStorageService } from './localStorage.js';
const ls = new LocalStorageService();
let row = document.querySelectorAll('.row');
let modal = document.getElementById('add-event-modal');
let edit = document.getElementById('editting-event-modal');
let newName = document.getElementById('editEventName');

for (let i = 0; i < row.length; i++) {
  row[i].onclick = function (e) {
    let element = e.path.find((el) => (el = 'div.task'));
    if (element.classList == 'row') {
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
      } else {
        modal.style.display = 'block';
      }
    } else if (element.classList == 'task') {
      newName.value = element.innerText;
      let itemsInStorage = ls.get('events');
      itemsInStorage.find((el) => (el.title === newName.value ? (el.status = 'edit') : false));
      ls.set('events', itemsInStorage);
      if (edit.style.display === 'block') {
        edit.style.display = 'none';
      } else {
        edit.style.display = 'block';
      }
    }
  };
}

let form = document.getElementById('modal-form-container');
form.addEventListener('click', function (evn) {
  evn.stopPropagation();
});
let editForm = document.getElementById('editting-container');
editForm.addEventListener('click', function (evn) {
  evn.stopPropagation();
});

modal.addEventListener('click', function () {
  if (modal.style.display === 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }

  document.myForm.reset();
});
edit.addEventListener('click', function () {
  if (edit.style.display === 'block') {
    edit.style.display = 'none';
  } else {
    edit.style.display = 'block';
  }
  let itemsInStorage = ls.get('events');
  itemsInStorage.find((el) => (el.status ? delete el.status : false));
  ls.set('events', itemsInStorage);
  document.edittingForm.reset();
});
