let row = document.querySelectorAll('.row');
let modal = document.getElementById('add-event-modal');

for (let i = 0; i < row.length; i++) {
  row[i].onclick = function (evn) {
    evn.stopPropagation();
    if (modal.style.display === 'block') {
      modal.style.display = 'none';
    } else {
      modal.style.display = 'block';
    }
  };
}

let form = document.getElementById('modal-form-container');
form.addEventListener('click', function (evn) {
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
