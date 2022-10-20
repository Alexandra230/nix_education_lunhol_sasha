let express = require('express');
let app = express();
let func = require('./func.js');
const fs = require('fs');
const host = 'localhost';
const port = '8000';
app.use(express.urlencoded({ extended: true }));

app.get('/contacts', function (req, res) {
  res.send(func.listContacts());
});

app.get('/contacts/:id', function (req, res) {
  let contactsData = fs.readFileSync('contacts.json');

  if (!JSON.parse(contactsData).find((el) => el.id == req.params.id)) {
    res.status(404);
    res.send(func.getById(req.params.id));
  } else {
    res.status(200);
    res.send(func.getById(req.params.id));
  }
});

app.post('/api/contacts', function (req, res) {
  if (req.body.name === undefined || req.body.email === undefined || req.body.phone === undefined) {
    res.status(400);
    res.send({ message: 'Missing required  field' });
  } else {
    res.status(201);
    res.send(func.addContact(req.body));
  }
});

app.delete('/api/contacts/:id', function (req, res) {
  let contactsData = fs.readFileSync('contacts.json');
  if (!JSON.parse(contactsData).find((el) => el.id == req.params.id)) {
    res.status(404);
    res.send({ message: 'Contact not found' });
  } else {
    res.status(200);
    res.send(func.removeContact(req.params.id));
  }
});

app.put('/api/contacts/:id', function (req, res) {
  let contactsData = fs.readFileSync('contacts.json');
  if (!JSON.parse(contactsData).find((el) => el.id == req.params.id)) {
    res.status(404);
    res.send({ message: 'Contact not found' });
  } else if (!req.body.name || !req.body.email || !req.body.phone) {
    res.status(200);
    res.send(func.updateContact(req.params.id, req.body));
  } else {
    res.status(400);
    res.send({ message: 'Missing required  field' });
  }
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
