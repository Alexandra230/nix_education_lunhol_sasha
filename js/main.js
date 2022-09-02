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
  let check = document.createElement('input');
  check.type = 'checkbox';
  check.id = `${color[i]}`;
  check.value = `${color[i]}`;
  let label = document.createElement('label');
  label.setAttribute('for', `${color[i]}`);

  label.innerText = `${color[i]}`;
  // label.setAttribute('class', 'text-inp-dop');
  label.appendChild(check);
  colorDiv.appendChild(label);
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
  let check = document.createElement('input');
  check.type = 'checkbox';
  check.value = `${memory[i]}`;
  let label = document.createElement('label');
  label.setAttribute('for', `${memory[i]}`);
  label.innerText = `${memory[i]} Gb`;
  // label.setAttribute('class', 'text-inp-dop');
  label.appendChild(check);
  memoryDiv.appendChild(label);
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
  let check = document.createElement('input');
  check.type = 'checkbox';
  check.id = `${os[i]}`;
  check.value = `${os[i]}`;
  let label = document.createElement('label');
  label.setAttribute('for', `${os[i]}`);
  label.innerText = `${os[i]}`;
  // label.setAttribute('class', 'text-inp-dop');
  label.appendChild(check);
  osDiv.appendChild(label);
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
const filters = document.querySelector('#sort-fields');

filters.addEventListener('input', filterGoods);
let res = 0;
function filterGoods() {
  const priceMin = document.querySelector('#from-price').value,
    priceMax = document.querySelector('#to-price').value,
    itemColor = [...filters.querySelectorAll('#color-sort input:checked')].map((n) => n.value),
    itemMemory = [...filters.querySelectorAll('#memory-sort input:checked')].map((n) => n.value),
    itemOs = [...filters.querySelectorAll('#os-sort input:checked')].map((n) => n.value),
    itemDisplay = [...filters.querySelectorAll('#display-sort input:checked')].map((n) => {
      return { id: n.value, from: n.value.split('-')[0], to: n.value.split('-')[1] };
    });

  outputGoods(
    items.filter((n) => {
      let isExist = n.color.findIndex((item) => itemColor.includes(item));
      let isDisplayExist = itemDisplay.findIndex((item) => {
        return item.from > n.display && item.to > n.display;
      });
      return (
        (!priceMin || priceMin <= n.price) &&
        (!priceMax || priceMax >= n.price) &&
        (!itemColor.length || isExist !== -1) &&
        (!itemMemory.length || itemMemory.find((el) => el == String(n.storage))) &&
        (!itemOs.length || itemOs.find((el) => el == String(n.os))) &&
        (!itemDisplay.length || isDisplayExist !== -1)
      );
    }),
  );
}

function outputGoods(element) {
  document.getElementById('cards').innerHTML = element
    .map(
      (n) =>
        `
  <div class="card" id="${n.id}" > 
  
    <div class="card-cont"><img src="./img/${n.imgUrl}" alt="apple-tv" class="card-img"/>
  <h2>${n.name}</h2>
  <div class="stock"><span class="${n.orderInfo.inStock > 0 ? 'check' : 'close'}"></span><p><b>${
          n.orderInfo.inStock
        }
  </b> left in stock</p></div>
  <p>Price: <b>${n.price}</b> $</p>
  <button class="addbtn" >Add to cart</button>
   <div class="card-footer"><div class="col1"><img class="like" src="./img/icons/like_filled.png" alt="like" /><p><b>
    ${n.orderInfo.reviews} %</b> Positive reviews</p><p>Above aletage</p>  </div>
  <div class="col2"> <p><b>${Math.round(
    Math.random() * (1000 - 300) + 300,
  )}</b></p> <p>orders</p> </div>  </div></div></div></div> </div>
  `,
    )
    .join('');

  items.forEach((element) => {
    const cardid = element.id;

    const newCard = document.getElementById(`${cardid}`);

    const btn = newCard.querySelector('.addbtn');
    if (element.orderInfo.inStock === 0) {
      btn.disabled = 'true';
    }
    btn.addEventListener('click', (event) => addToStorage(event, element));
  });
  let cart = [];
  let storageCart = JSON.parse(localStorage.getItem('cart'));
  function addToStorage(event, element) {
    let cartItem = {
      deviceId: element.id,
      imgUrl: element.imgUrl,
      deviceName: element.name,
      devicePrice: element.price,
      count: 1,
    };
    addToCart(cartItem);
    cart.push(cartItem);
    if (storageCart === null) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      for (let i = 0; i < storageCart.length; i++) {
        cart.push(storageCart[i]);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    console.log(cart);

    event.stopPropagation();
  }
  let cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
      let element = cards[i];
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
}
outputGoods(items);

////////////////////////////////////////////////

document.getElementById('modalBack').addEventListener('click', function () {
  let x = document.getElementById('modal');
  x.style.display = 'none';
  let x1 = document.getElementById('modalBack');
  x1.style.display = 'none';
  document.getElementById('modal').innerHTML = '';
});
///////////////////////////////////////////////////////
const cartcont = document.getElementById('modal-cart-section');
const cart = document.getElementById('cart');
cart.addEventListener('click', function () {
  if (cartcont.style.display === 'block') {
    cartcont.style.display = 'none';
  } else {
    cartcont.style.display = 'block';
  }
});
///////////////////////////////////////////////////////

let ul = document.getElementById('cart-list');

function addToCart(element) {
  let li = document.createElement('li');
  let div = document.createElement('div');
  div.setAttribute('class', 'cart-item-div');
  let deviceInfo = '';
  deviceInfo +=
    '<div><img class="cart-item-img" src = "./img/' + element.imgUrl + '" alt=""  /></div>';
  deviceInfo +=
    '<div class="cart-item-info"><h4>' +
    element.deviceName +
    '</h4><div class="cart-item-price-cont"><span class="cart-item-price">$' +
    element.devicePrice +
    '</span></div></div>';
  deviceInfo +=
    '<div><button id="minusItem">-</button><span id="itemCount"></span><button id="plusItem">+</button><button id="deleteItem">X</button></div>';
  div.innerHTML += deviceInfo;
  li.appendChild(div);
  ul.appendChild(li);
}
let itemsInStorage = JSON.parse(localStorage.getItem('cart'));
// if (itemsInStorage === 0) {
//   console.log('not okok');
// } else {
//   itemsInStorage.forEach((element) => addToCart(element));
// } не видит картинку , почему? не понимаю
