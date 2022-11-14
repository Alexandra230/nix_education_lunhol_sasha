import { loadItems } from '../items/loadItems.js';

let shop = document.getElementById('wrapper');
let tokenUser;
let loginForm = document.getElementById('form-container-login');
async function sendForm(e) {
  e.preventDefault();

  let username = document.getElementById('username-login').value;
  let password = document.getElementById('password-login').value;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8000/users/login', true);

  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let res = JSON.parse(xhr.response);
      if (res.ok === true) {
        alert(res.msg);
        tokenUser = res.token;
        document.formLogin.reset();
        loginForm.style.display = 'none';
        shop.style.display = 'block';

        loadItems(tokenUser);
      }
    }
  };
  xhr.send(`username=${username}&password=${password}`);
}
let form = document.getElementById('form-login');

form.onsubmit = sendForm;
