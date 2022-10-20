const fs = require('fs');

function listContacts() {
  let contactsData = fs.readFileSync('contacts.json');
  return contactsData;
}
function getById(id) {
  let contactsData = fs.readFileSync('contacts.json');
  let res = JSON.parse(contactsData);
  let arr = res.find((e) => e.id == id);
  if (arr) {
    return arr;
  } else {
    return [{ message: 'Not Found' }];
  }
}

function addContact(body) {
  let contactsData = fs.readFileSync('contacts.json');
  let json = JSON.parse(contactsData);
  let identi = json.slice(-1);
  const contactbody = {
    id: identi[0].id + 1,
    name: body.name,
    email: body.email,
    phone: body.phone,
  };

  json.push(contactbody);

  fs.writeFileSync('contacts.json', JSON.stringify(json));
  return contactbody;
}
function removeContact(id) {
  let contactsData = fs.readFileSync('contacts.json');
  let json = JSON.parse(contactsData);
  json = json.filter((el) => el.id !== +id);
  fs.writeFileSync('contacts.json', JSON.stringify(json));
  return { message: `${id} Сontact deleted` };
}

function updateContact(contactId, body) {
  let contactsData = fs.readFileSync('contacts.json');
  let json = JSON.parse(contactsData);
  json.find((el) => {
    if (el.id == contactId) {
      Object.assign(el, body);
    }
  });
  fs.writeFileSync('contacts.json', JSON.stringify(json));
  return json.find((el) => el.id == contactId);
}

module.exports = {
  listContacts,
  getById,
  addContact,
  removeContact,
  updateContact,
};
