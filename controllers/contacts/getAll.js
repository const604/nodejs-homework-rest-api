const { Contact } = require("../../models/contact");

exports.getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const { favorite = true} = req.query;
  const allContacts = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
    favorite,
  }).populate("owner", "name email");
  // const allContacts = await Contact.find({}, "name phone");
  // const allContacts = await Contact.find({}, "+password");
  // const allContacts = await Contact.find({}, "-password");
  res.json(allContacts);
};
