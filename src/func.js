const fs = require('fs');

function listContacts() {
  var userDataEntries = fs.readFileSync('contacts.json').toString();
  return userDataEntries;
}
module.exports = {
  listContacts,
};
