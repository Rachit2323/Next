import mongoose from "mongoose";


const registrationSchema = new mongoose.Schema({
  cpspId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },

  Father_HusbandName: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },

  CNIC: {
    type: String,
    required: true,
  },

  Passport: {
    type: String,
    // required: true,
  },

  PMDC: {
    type: String,
    // required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
  Speciality: {
    type: String,
    required: true,
  },
  Institution: {
    type: String,
    required: true,
  },
 

  Mailing_Address: {
    type: String,
    required: true,
  },
  Town_City: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  Telephone_Number: {
    type: Number,
    required: true,
  },
  Email_Address: {
    type: String,
    required: true,
  },

  selectedCategory: {
    type: String,
    required: true,
  },

  selectedPaymentMethod: {
    type: String,
    required: true,
  },
  slipReferenceNumber: {
    type: String,
  },
  Passportimage: { // New field for image filename
    type: String,
  },
  Bankimage: { // New field for image filename
    type: String,
    required: true,
  },
});


const form = mongoose.models.form || mongoose.model("form", registrationSchema);

module.exports = form;
