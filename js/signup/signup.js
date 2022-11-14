let signupForm = document.getElementById('form-container-signup');

let loginForm = document.getElementById('form-container-login');
let form = document.getElementById('form-signup');

async function sendForm(e) {
  e.preventDefault();

  let username = document.getElementById('username-signup').value;
  let email = document.getElementById('email-signup').value;
  let password = document.getElementById('password-signup').value;
  console.log(username);
  console.log(email);
  console.log(password);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8000/users/signup', true);

  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let res = JSON.parse(xhr.response);
      if (res.ok === true) {
        alert(res.msg);
        document.formSignup.reset();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
      }
    }
  };
  xhr.send(`username=${username}&email=${email}&password=${password}`);
}

form.onsubmit = sendForm;
