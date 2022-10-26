const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Contacts = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, require: true },
});
const contacts = mongoose.model('Contacts', Contacts);
module.exports = contacts;
