// const sgMail = require("@sendgrid/mail");
const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "const604@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: "const604@gmail.com",
//   from: "const604@meta.ua",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong> from localhost:3000</p>",
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));

const sendEmail = async (data) => {
  const email = { ...data, from: "const604@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;

// const { SENDGRID_APY_KEY } = process.env;

// sgMail.setApyKey(SENDGRID_APY_KEY);

// const sendEmail = async (data) => {
//   const email = { ...data, from: "" };
//   await sgMail.send(email);
//   return true
// }

// module.exports = sendEmail;
