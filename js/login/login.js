import { loadItems } from '../items/loadItems.js';
//import { findItems } from '../main.js';
let shop = document.getElementById('wrapper');
let tokenUser;
let loginForm = document.getElementById('form-container-login');
import { LocalStorageService } from '../localStorageService.js';
const ls = new LocalStorageService();
let storageToken = ls.get('token') || [];
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

        if (storageToken == []) {
          storageToken.push(tokenUser);
          ls.set('token', storageToken);
          console.log('true');
        } else {
          storageToken.shift();
          storageToken.push(tokenUser);
          ls.set('token', storageToken);
          console.log(storageToken);
        }

        loadItems(tokenUser);
        //findItems(tokenUser);
      }
    }
  };
  xhr.send(`username=${username}&password=${password}`);
}
let form = document.getElementById('form-login');

form.onsubmit = sendForm;
