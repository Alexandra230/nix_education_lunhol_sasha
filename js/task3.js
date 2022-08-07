class Validator {
  checkIsEmail(email) {
    let res =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(email);
  }
  checkIsDomain(domain) {
    let res = /^(http[s]?\:\/\/)?((\w+)\.)?(([\w-]+)?)(\.[\w-]+){1,2}$/;
    return res.test(domain);
  }
  checkIsDate(date) {
    let res = /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/;
    return res.test(date);
  }
  checkIsPhone(phone) {
    let res = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
    return res.test(phone);
  }
}

let validator = new Validator();
console.log(validator.checkIsEmail('vasya.pupkin@gmail.com'));
console.log(validator.checkIsDomain('google.com'));
console.log(validator.checkIsDate('30.11.2019'));
console.log(validator.checkIsPhone('+38 (066) 937-99-92'));
