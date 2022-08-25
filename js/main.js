import { items } from './items.js';
let cardsContainer = document.getElementById('cards-container');
function orders() {
  return Math.round(Math.random() * (1000 - 300) + 300);
}
let sort = document.getElementById('open-sort');
sort.addEventListener('click', function () {
  document.getElementById('cards-container').style.width = '70%';

  document.getElementById('sort-container').style.display = 'block';
  document.getElementById('card-sort-container').style.display = 'flex';
  document.getElementById('card-sort-container').style.flexDirection = 'row-reverse';
  document.getElementById('card-sort-container').style.justifyContent = 'space-between';
});

items.map((item) => {
  let newItem = document.createElement('div');

  newItem.className = 'card';
  newItem.id = 'card';
  if (item.orderInfo.inStock > 0) {
    newItem.innerHTML =
      '<div id = "card-cont" class = "card-cont"><div class="card-img"><img  src="../img/' +
      item.imgUrl +
      '" /></div> <h3>' +
      item.name +
      '</h3> <div class="card-info"><div class="stock"><div class = "check-round"></div><p>' +
      item.orderInfo.inStock +
      ' left in stock</p></div><p>Prise: <b> ' +
      item.price +
      '</b> $</p></div><button class="addbtn">Add to cart</button></div> <div class="card-footer"><div class="col1"><img class="like" src="../img/icons/like_filled.png" /><p><b>' +
      item.orderInfo.reviews +
      '%</b>  Positive reviews</p><p>Above avarage</p></div><div class="col2"><p><b>' +
      orders() +
      '</b> orders</p></div></div></div> <div id="modal" class="modal"><button  class="close">X</button><div class="modal-container"><div class="modal-img"><img  src="../img/' +
      item.imgUrl +
      '" /></div><div class="modal-info"><h3>' +
      item.name +
      '</h3><div class="modal-footer"><div class="col01"><img class="like" src="../img/icons/like_filled.png" /><p><b>' +
      item.orderInfo.reviews +
      '%</b>  Positive reviews</p><p>Above avarage</p></div><div class="col02"><p><b>' +
      orders() +
      '</b> orders</p></div></div><div class="list">   <ul class="info-list"> <li class="info-item">Color: ' +
      item.color +
      ' </li> <li class="info-item">Operating System: ' +
      item.os +
      '</li><li class="info-item">Chip: ' +
      item.chip.name +
      '</li><li class="info-item">Height: ' +
      item.size.height +
      ' cm</li>   <li class="info-item">Width: ' +
      item.size.width +
      ' cm</li><li class="info-item">Depth: ' +
      item.size.depth +
      ' cm</li><li class="info-item">Weight: ' +
      item.size.weight +
      ' g</li></ul></div></div><div class="modal-price"> <h2>$ ' +
      item.price +
      '</h2><span class="leftInStock">Stock: <b>' +
      item.orderInfo.inStock +
      '</b> pcs.</span><button class="addbtn">Add to cart</button></div></div></div></div>';
    cardsContainer.appendChild(newItem);
  } else {
    newItem.innerHTML =
      '<div class = "card-cont"><div class="card-img"><img src="../img/' +
      item.imgUrl +
      '" /></div> <h3>' +
      item.name +
      '</h3> <div class="card-info"><div class="stock"><img src="../img/icons/close.svg" /><p>' +
      item.orderInfo.inStock +
      ' left in stock</p></div><p>Prise: <b> ' +
      item.price +
      '</b> $</p></div><button class="addbtn">Add to cart</button></div><div class="card-footer"><div class="col1"><img class="like" src="../img/icons/like_filled.png" /><p><b>' +
      item.orderInfo.reviews +
      '%</b>  Positive reviews</p><p>  Above avarage</p></div><div class="col2"><p><b>' +
      orders() +
      '</b> orders</p></div></div></div><div id="modal" class="modal" > <button  class="close">X</button><div class="modal-container"><div class="modal-img"><img  src="../img/' +
      item.imgUrl +
      '" /></div><div class="modal-info"><h3>' +
      item.name +
      '</h3><div class="modal-footer"><div class="col01"><img class="like" src="../img/icons/like_filled.png" /><p><b>' +
      item.orderInfo.reviews +
      '%</b>  Positive reviews</p><p>Above avarage</p></div><div class="col02"><p><b>' +
      orders() +
      '</b> orders</p></div></div><div class="list">   <ul class="info-list"> <li class="info-item">Color: ' +
      item.color +
      ' </li> <li class="info-item">Operating System: ' +
      item.os +
      '</li><li class="info-item">Chip: ' +
      item.chip.name +
      '</li><li class="info-item">Height: ' +
      item.size.height +
      ' cm</li>   <li class="info-item">Width: ' +
      item.size.width +
      ' cm</li><li class="info-item">Depth: ' +
      item.size.depth +
      ' cm</li><li class="info-item">Weight: ' +
      item.size.weight +
      ' g</li></ul></div></div><div class="modal-price"> <h2>$ ' +
      item.price +
      '</h2><span class="leftInStock">Stock: <b>' +
      item.orderInfo.inStock +
      '</b> pcs.</span><button class="addbtn">Add to cart</button></div></div></div></div>';
    cardsContainer.appendChild(newItem);
  }
});
let card = document.getElementsByClassName('card');
for (let i = 0; i < card.length; i++) {
  card[i].onclick = function () {
    document.getElementsByClassName('modal')[i].setAttribute('style', 'visibility:visible');
  };
}
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    document.getElementById('modal').removeAttribute('style');
  };
}

let price = document.getElementById('price-show');
if (price.getAttribute('class') == 'arrow-right') {
  price.addEventListener('click', function () {
    price.removeAttribute('class');
    price.setAttribute('class', 'arrow-bottom');
    document.getElementById('sort-price').style.display = 'block';
  });
} else if (price.getAttribute('class') == 'arrow-bottom') {
  price.addEventListener('click', function () {
    price.removeAttribute('class');
    price.setAttribute('class', 'arrow-right');
    document.getElementById('sort-price').style.display = 'none';
  });
}

// let modal = document.getElementById('modal');
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// };
