const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");
const subscriptionEnum = require("../constants/subscriptionEnum");

/* eslint-disable no-useless-escape */

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    subscription: {
      type: String,
      // enum: ["starter", "pro", "business"],
      enum: Object.values(subscriptionEnum),
      default: subscriptionEnum.STARTER,
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...Object.values(subscriptionEnum)),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...Object.values(subscriptionEnum)),
});

const schemas = {
  registerSchema,
  loginSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
