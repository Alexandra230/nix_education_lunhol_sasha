let express = require('express');
let app = express();

const fs = require('fs');
const host = 'localhost';
const port = '8000';
app.use(express.urlencoded({ extended: true }));

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

app.get('/contacts', function (req, res) {
  res.send(listContacts());
});

app.get('/contacts/:id', function (req, res) {
  let contactsData = fs.readFileSync('contacts.json');

  if (!JSON.parse(contactsData).find((el) => el.id == req.params.id)) {
    res.status(404);
    res.send(getById(req.params.id));
  } else {
    res.status(200);
    res.send(getById(req.params.id));
  }
});

app.post('/api/contacts', function (req, res) {
  if (req.body.name === undefined || req.body.email === undefined || req.body.phone === undefined) {
    res.status(400);
    res.send({ message: 'Missing required  field' });
  } else {
    res.status(201);
    res.send(addContact(req.body));
  }
});

app.delete('/api/contacts/:id', function (req, res) {
  let contactsData = fs.readFileSync('contacts.json');
  if (!JSON.parse(contactsData).find((el) => el.id == req.params.id)) {
    res.status(404);
    res.send({ message: 'Contact not found' });
  } else {
    res.status(200);
    res.send(removeContact(req.params.id));
  }
});

app.put('/api/contacts/:id', function (req, res) {
  let contactsData = fs.readFileSync('contacts.json');
  if (!JSON.parse(contactsData).find((el) => el.id == req.params.id)) {
    res.status(404);
    res.send({ message: 'Contact not found' });
  } else if (!req.body.name || !req.body.email || !req.body.phone) {
    res.status(200);
    res.send(updateContact(req.params.id, req.body));
  } else {
    res.status(400);
    res.send({ message: 'Missing required  field' });
  }
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
