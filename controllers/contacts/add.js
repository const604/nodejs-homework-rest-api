const { Contact } = require("../../models/contact");

exports.add = async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json(newContact);
};
