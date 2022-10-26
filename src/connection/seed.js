const Contacts = require('../models/contacts.js');
const mongoose = require('./mongoDB.js');
const fs = require('fs');

let contactsData = fs.readFileSync('contacts.json');
let users = JSON.parse(contactsData);
mongoose();
users.map(function (data) {
  let contacts = new Contacts(data);
  contacts.save(data);
});
