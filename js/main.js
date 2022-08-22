import { items } from './items.js';

let cardsContainer = document.getElementById('cards-container');
function orders() {
  return Math.round(Math.random() * (1000 - 300) + 300);
}
items.map((item) => {
  let newItem = document.createElement('div');
  newItem.className = 'card';
  if (item.orderInfo.inStock > 0) {
    newItem.innerHTML =
      '<div class = "card-cont"><div class="card-img"><img  src="../img/' +
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
      '</b> orders</p></div></div></div>';
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
      '</b> orders</p></div></div></div>';
    cardsContainer.appendChild(newItem);
  }
});
