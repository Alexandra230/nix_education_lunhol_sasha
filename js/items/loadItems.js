import { main } from '../main.js';
async function loadItems(t) {
  let token = t;
  let items = [];
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:8000/users/cards');
  xhr.setRequestHeader('x-access-token', token);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      items = JSON.parse(xhr.response);
      console.log(items);
      main(items);
    }
  };

  xhr.send();
}
export { loadItems };
