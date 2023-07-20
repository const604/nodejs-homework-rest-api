const { ctrlWrapper } = require("../../helpers");

const {add} = require("./add");
const {deleteById} = require("./deleteById");
const {getAll} = require("./getAll");
const {getById} = require("./getById");
const {updateById} = require("./updateById");
const {updateStatusContact} = require("./updateStatusContact");

module.exports = {
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  updateById: ctrlWrapper(updateById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
