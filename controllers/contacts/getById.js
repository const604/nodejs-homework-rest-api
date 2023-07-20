const { Contact } = require("../../models/contact");

const { HttpError } = require("../../helpers");

exports.getById = async (req, res) => {
  const { id } = req.params;
  // const oneContact = await Contact.findOne({ _id: id });
  const oneContact = await Contact.findById(id);
  if (!oneContact) {
    throw HttpError(404, "Not found");
  }
  res.json(oneContact);
};
