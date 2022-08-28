import { items } from './items.js';
///////////////////////////
let openSort = document.getElementById('open-sort');
openSort.addEventListener('click', function () {
  let x = document.getElementById('sort-fields');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
});
///////////////////////////////
let colorSort = document.getElementById('color-sort');
let colorShow = document.getElementById('color-show');
colorShow.addEventListener('click', function () {
  if (colorShow.getAttribute('class') === 'arrow-right' && colorSort.style.display === 'none') {
    colorShow.setAttribute('class', 'arrow-bottom');
    colorSort.style.display = 'block';
  } else {
    colorShow.setAttribute('class', 'arrow-right');
    colorSort.style.display = 'none';
  }
});

let color = [];
for (let i = 0; i < items.length; i++) {
  color.push(items[i].color);
}
color = color.flat();
color = color.filter((el, id) => color.indexOf(el) === id);

let colorDiv = document.getElementById('color-sort');

for (let i = 0; i < color.length; i++) {
  let div = document.createElement('div');

  let check = document.createElement('input');
  check.type = 'checkbox';
  check.id = `${color[i]}`;
  let label = document.createElement('label');
  label.setAttribute('for', `${color[i]}`);
  label.innerText = `${color[i]}`;
  // label.setAttribute('class', 'text-inp-dop');
  div.appendChild(check);
  div.appendChild(label);
  colorDiv.appendChild(div);
}

let priceSort = document.getElementById('price-sort');
let price = document.getElementById('price-show');
price.addEventListener('click', function () {
  if (price.getAttribute('class') === 'arrow-right' && priceSort.style.display === 'none') {
    price.setAttribute('class', 'arrow-bottom');
    priceSort.style.display = 'block';
  } else {
    price.setAttribute('class', 'arrow-right');
    priceSort.style.display = 'none';
  }
});

/////////////////////////////////////////////////
let memorySort = document.getElementById('memory-sort');
let memoryShow = document.getElementById('memory-show');
memoryShow.addEventListener('click', function () {
  if (memoryShow.getAttribute('class') === 'arrow-right' && memorySort.style.display === 'none') {
    memoryShow.setAttribute('class', 'arrow-bottom');
    memorySort.style.display = 'block';
  } else {
    memoryShow.setAttribute('class', 'arrow-right');
    memorySort.style.display = 'none';
  }
});
let memory = [];
for (let i = 0; i < items.length; i++) {
  memory.push(items[i].storage);
}
memory = memory.filter((el, id) => memory.indexOf(el) === id);
let memoryDiv = document.getElementById('memory-sort');

for (let i = 0; i < memory.length; i++) {
  let div = document.createElement('div');

  let check = document.createElement('input');
  check.type = 'checkbox';
  check.id = `${memory[i]}`;
  let label = document.createElement('label');
  label.setAttribute('for', `${memory[i]}`);
  label.innerText = `${memory[i]} Gb`;
  // label.setAttribute('class', 'text-inp-dop');
  div.appendChild(check);
  div.appendChild(label);
  memoryDiv.appendChild(div);
}
///////////////////////////////////////////////////
/////////////////////////////////////////////
let osSort = document.getElementById('os-sort');
let osShow = document.getElementById('os-show');
osShow.addEventListener('click', function () {
  if (osShow.getAttribute('class') === 'arrow-right' && osSort.style.display === 'none') {
    osShow.setAttribute('class', 'arrow-bottom');
    osSort.style.display = 'block';
  } else {
    osShow.setAttribute('class', 'arrow-right');
    osSort.style.display = 'none';
  }
});

let os = [];
for (let i = 0; i < items.length; i++) {
  os.push(items[i].os);
}

os = os.filter((el, id) => os.indexOf(el) === id);

let osDiv = document.getElementById('os-sort');

for (let i = 0; i < os.length; i++) {
  let div = document.createElement('div');

  let check = document.createElement('input');
  check.type = 'checkbox';
  check.id = `${os[i]}`;
  let label = document.createElement('label');
  label.setAttribute('for', `${os[i]}`);
  label.innerText = `${os[i]}`;
  // label.setAttribute('class', 'text-inp-dop');
  div.appendChild(check);
  div.appendChild(label);
  osDiv.appendChild(div);
}
/////////////////////////////////////////////
/////////////////////////////////////////////
let displaySort = document.getElementById('display-sort');
let displayShow = document.getElementById('display-show');
displayShow.addEventListener('click', function () {
  if (displayShow.getAttribute('class') === 'arrow-right' && displaySort.style.display === 'none') {
    displayShow.setAttribute('class', 'arrow-bottom');
    displaySort.style.display = 'block';
  } else {
    displayShow.setAttribute('class', 'arrow-right');
    displaySort.style.display = 'none';
  }
});
/////////////////////////////////////////////////
const container = document.getElementById('cards');

items.forEach((element) => {
  let text = '';
  text += '<div class="card" id="' + element.id + '" > ';
  text +=
    '<div class="card-cont"><img src="./img/' +
    element.imgUrl +
    '" alt="apple-tv" class="card-img"/>';
  text += '<h2>' + element.name + '</h2>';
  text += `<div class="stock"><span class="${
    element.orderInfo.inStock > 0 ? 'check' : 'close'
  }"></span><p><b>${element.orderInfo.inStock}
  </b> left in stock</p></div>`;
  text += '<p>Price: <b>' + element.price + '</b> $</p>';
  text += '<div class="addbtn">Add to cart</div> ';
  text +=
    ' <div class="card-footer"><div class="col1"><img class="like" src="./img/icons/like_filled.png" alt="like" /><p><b>' +
    element.orderInfo.reviews +
    '%</b> Positive reviews</p><p>Above aletage</p>  </div>';
  text +=
    '<div class="col2"> <p><b>' +
    Math.round(Math.random() * (1000 - 300) + 300) +
    '</b></p> <p>orders</p> </div>  </div></div></div></div> </div>';
  container.innerHTML += text;
});
let cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function () {
    let element = cards[i];
    console.log(element);
    let x = document.getElementById('modal');
    x.style.display = 'flex';
    let x1 = document.getElementById('modalBack');
    x1.style.display = 'block';
    let text = '';

    text +=
      '<div class ="modal-img"> <img src="./img/' +
      items[element.id - 1].imgUrl +
      '" alt=""  /> </div>';
    text += ' <div class="modal-info"> <h2>' + items[element.id - 1].name + '</h2> ';
    text +=
      ' <div class="modal-footer"><div class="col01"><img class="like" src="./img/icons/like_filled.png" alt="like" /><p><b>' +
      items[element.id - 1].orderInfo.reviews +
      '%</b> Positive reviews</p><p>Above aletage</p>  </div>';
    text +=
      '<div class="col02"> <p><b>' +
      Math.round(Math.random() * (1000 - 300) + 300) +
      '</b></p> <p>orders</p> </div>  </div>';
    text +=
      '<ul class="info-list"> <li class="info-item">Color: <b> ' +
      items[element.id - 1].color +
      '</b></li> <li class="info-item">Operating System:<b>   ' +
      items[element.id - 1].os +
      '</b></li> <li class="info-item">Chip:<b>   ' +
      items[element.id - 1].chip.name +
      '</b>  </li> <li class="info-item">Height: <b> ' +
      items[element.id - 1].size.height +
      ' cm</b></li> <li class="info-item">Width: <b> ' +
      items[element.id - 1].size.width +
      ' cm</b></li> <li class="info-item">Depth: <b> ' +
      items[element.id - 1].size.depth +
      ' cm</b></li> <li class="info-item">Weight: <b> ' +
      items[element.id - 1].size.weight +
      ' g</b></li> </ul>';
    text +=
      '</div> <div class="modal-price"><h2>$ ' +
      items[element.id - 1].price +
      '</h2> <span class="leftInStock">Stocks:<b> ' +
      items[element.id - 1].orderInfo.inStock +
      '</b> pcs.</span> <button class="addbtn">Add to cart</button> </div>';
    x.innerHTML += text;
  });
}

document.getElementById('modalBack').addEventListener('click', function () {
  let x = document.getElementById('modal');
  x.style.display = 'none';
  let x1 = document.getElementById('modalBack');
  x1.style.display = 'none';
  document.getElementById('modal').innerHTML = '';
});
