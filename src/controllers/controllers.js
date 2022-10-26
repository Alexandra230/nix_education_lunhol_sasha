const fs = require('fs');
const express = require('express');

const app = express();
const contacts = require('../models/contacts.js');
app.use(express.urlencoded({ extended: true }));
const contactsList = async function (req, res) {
  res.status(200);
  res.send(
    await contacts.find((err, data) => {
      if (err) return handleError(err);
      return data;
    }),
  );
};
const getById = async function (req, res) {
  const user = await contacts.findOne({ _id: req.params._id });
  if (!user) {
    res.status(404).send({
      message: 'User is not found',
    });
  } else {
    res.send(user);
  }
};
const addContact = async function (req, res) {
  if (!req.body.name || !req.body.email || !req.body.phone) {
    res.status(400).send({
      message: 'Missing required name',
    });
  } else {
    const contact = new contacts({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    contact.save().then(() => console.log('User created'));
    res.status(201).send(contact);
  }
};

const removeContact = async function (req, res) {
  contacts.findByIdAndDelete(req.params._id, function (err, doc) {
    if (err) {
      return res.status(400).send({ message: 'Missing id' });
    }
    return res.status(200).send({ message: `${req.params._id} Сontact deleted` });
  });
};

const updateContact = async function (req, res) {
  contacts.findByIdAndUpdate(
    req.params._id,
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    },
    function (err, data) {
      if (err)
        return {
          error: err,
        };
      return res.status(200).send({ message: `${req.params._id} Сontact update` });
    },
  );
};

module.exports = {
  contactsList,
  getById,
  addContact,
  removeContact,
  updateContact,
};
