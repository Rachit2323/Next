"use client";

import React, { useState } from "react";
import Image from "next/image";

const Registration = () => {
  const [formData, setFormData] = useState({
    cpspId: "",
    title: "",
    fullName: "",
    Father_HusbandName: "",
    Gender: "",
    CNIC: "",
    Passport: "",
    PMDC: "",
    Designation: "",
    Speciality: "",
    Institution: "",
    Mailing_Address: "",
    Town_City: "",
    Country: "",
    Telephone_Number: "",
    Email_Address: "",
    selectedCategory: "",
    selectedPaymentMethod: "",
    slipReferenceNumber: "",
    Bankimage: "",
    Passportimage: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [checkBoxValues, setCheckBoxValues] = useState({
    checkBox1: false,
    checkBox2: false,
  });

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    setCheckBoxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const handlePassportImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      Passportimage: file, // Update the Passportimage field with the selected file
    });
  };

  const handleBankImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFormData({
      ...formData,
      Bankimage: file, // Update the Bankimage field with the selected file
    });
  };

  const handleCategoryChange = (e) => {
    setFormData({
      ...formData,
      selectedCategory: e.target.value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setFormData({
      ...formData,
      selectedPaymentMethod: e.target.value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleTitleChange = (selectedTitle) => {
    setFormData({
      ...formData,
      title: selectedTitle,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log(formData);
    try {
      const res = await fetch("http://localhost:3000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-md w-full md:w-96 gap-6 flex flex-col md:min-w-[600px] font-roboto mt-8 mb-8">
        <h1 className="text-xl md:text-2xl font-semibold w-full mb-4">
          Personal Information
        </h1>
        <form className="gap-5 flex flex-col " onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="cpspId"
              className="block text-gray-600 font-medium text-sm"
            >
              CPSP ID<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="cpspId"
              name="cpspId"
              className="w-full p-2 border rounded mt-1"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600 font-medium text-sm">
              Title<span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="title"
                  value="Prof"
                  checked={formData.title === "Prof"}
                  onClick={() => handleTitleChange("Prof")}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Prof</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="title"
                  value="Dr"
                  checked={formData.title === "Dr"}
                  onClick={() => handleTitleChange("Dr")}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Dr</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="title"
                  value="Ms"
                  checked={formData.title === "Ms"}
                  onClick={() => handleTitleChange("Ms")}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Ms</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="title"
                  value="Mr"
                  checked={formData.title === "Mr"}
                  onClick={() => handleTitleChange("Mr")}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Mr</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="fullName"
              className="block text-gray-600 font-medium"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Father_HusbandName"
              className="block text-gray-600 font-medium"
            >
              Father's/ Husband's Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Father_HusbandName"
              name="Father_HusbandName"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="Gender" className="block text-gray-600 font-medium">
              Gender<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Gender"
              name="Gender"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="CNIC" className="block text-gray-600 font-medium">
              CNIC #<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="CNIC"
              name="CNIC"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Passport"
              className="block text-gray-600 font-medium"
            >
              Passport # (If Applicable)
            </label>
            <input
              type="text"
              id="Passport"
              name="Passport"
              className="w-full p-2 border rounded mt-2"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="PMDC" className="block text-gray-600 font-medium">
              PMDC #(If Applicable)
            </label>
            <input
              type="text"
              id="PMDC"
              name="PMDC"
              className="w-full p-2 border rounded mt-2"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Designation"
              className="block text-gray-600 font-medium"
            >
              Designation<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Designation"
              name="Designation"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Speciality"
              className="block text-gray-600 font-medium"
            >
              Speciality<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Speciality"
              name="Speciality"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Institution"
              className="block text-gray-600 font-medium"
            >
              Institution<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Institution"
              name="Institution"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Mailing_Address"
              className="block text-gray-600 font-medium"
            >
              Mailing Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Mailing_Address"
              name="Mailing_Address"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Town_City"
              className="block text-gray-600 font-medium"
            >
              Town/City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Town_City"
              name="Town_City"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Country"
              className="block text-gray-600 font-medium"
            >
              Country<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Country"
              name="Country"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Telephone_Number"
              className="block text-gray-600 font-medium"
            >
              Telephone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Telephone_Number"
              name="Telephone_Number"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Email_Address"
              className="block text-gray-600 font-medium"
            >
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Email_Address"
              name="Email_Address"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold w-full mb-4">
            Registration
          </h1>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium text-sm">
              Select Categories (Please Select Category That Best Describes You)
              <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Consultants/Family Physicians (Rs.15000/=)"
                  checked={
                    formData.selectedCategory ===
                    "Consultants/Family Physicians (Rs.15000/=)"
                  }
                  onChange={handleCategoryChange}
                  className="form-radio"
                  required
                />
                <span className="ml-2">
                  Consultants/Family Physicians (Rs.15000/=)
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="PG Trainees / Nurse (Rs.8000/=)"
                  checked={
                    formData.selectedCategory ===
                    "PG Trainees / Nurse (Rs.8000/=)"
                  }
                  onChange={handleCategoryChange}
                  className="form-radio"
                  required
                />
                <span className="ml-2">PG Trainees / Nurse (Rs.8000/=)</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Medical Students (Rs.3500/=)"
                  checked={
                    formData.selectedCategory === "Medical Students (Rs.3500/=)"
                  }
                  onChange={handleCategoryChange}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Medical Students (Rs.3500/=)</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Accompanying Person (Rs.8000/=)"
                  checked={
                    formData.selectedCategory ===
                    "Accompanying Person (Rs.8000/=)"
                  }
                  onChange={handleCategoryChange}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Accompanying Person (Rs.8000/=)</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Pharma Delegate (Rs.8000/=)"
                  checked={
                    formData.selectedCategory === "Pharma Delegate (Rs.8000/=)"
                  }
                  onChange={handleCategoryChange}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Pharma Delegate (Rs.8000/=)</span>
              </label>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-600 font-medium text-sm">
              Payment Method<span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  value="Online Debit / Credit (Coming Soon)"
                  checked={
                    formData.selectedPaymentMethod ===
                    "Online Debit / Credit (Coming Soon)"
                  }
                  onChange={handlePaymentMethodChange}
                  className="form-radio"
                  required
                />
                <span className="ml-2">
                  Online Debit / Credit (Coming Soon)
                </span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  value="Bank Transfer / Deposit"
                  checked={
                    formData.selectedPaymentMethod === "Bank Transfer / Deposit"
                  }
                  onChange={handlePaymentMethodChange}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Bank Transfer / Deposit</span>
              </label>
            </div>
          </div>

          <span className="block text-gray-500 font-medium text-sm">
            Please be kind to make an online transfer to the bank account of PSR
            given below. Once you have made the transfer please take screen shot
            of the deposit slip and upload the same on the link given below.
          </span>

          <Image
            src="/deskt.png"
            alt="Description of the Bank"
            width={800} // Set the width of the image
            height={700} // Set the height of the image
          />
          <span className="block text-gray-500 font-medium text-sm">
            You can make Payment on this Account
          </span>

          <div className="mb-6">
            <label
              htmlFor="slipReferenceNumber"
              className="block text-gray-600 font-medium"
            >
              Slip / Reference Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="slipReferenceNumber"
              name="slipReferenceNumber"
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Bankimage"
              className="block text-gray-600 font-medium"
            >
              Upload Bank Slip<span className="text-red-500">*</span>
            </label>
            <input
              type="file" // Set the input type to "file" for uploading
              accept="image/*" // Specify accepted file types (in this case, images)
              className="w-full p-2 border rounded mt-2"
              required
              onChange={handleBankImageChange} // Handle image change
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold w-full ">
            Photo (Passport Size Selfie)
          </h1>
          <label className=" text-gray-600 font-sm">
            Please be kind to share your Selfie Photo required for Conference
            Badge
          </label>

          <div className="mb-6">
            <label
              htmlFor="Passportimage"
              className="block text-gray-600 font-medium"
            >
              Upload Photo
            </label>
            <input
              type="file" // Set the input type to "file" for uploading
              accept="image/*" // Specify accepted file types (in this case, images)
              className="w-full p-2 border rounded mt-2"
              onChange={handlePassportImageChange} // Handle image change
            />
          </div>

          <label className="block text-gray-600 font-sm">
            Disclosure Information
          </label>

          <div className="mb-6">
            <span className="block text-gray-600 font-medium text-sm">
              <input
                type="checkbox"
                name="checkBox1"
                checked={checkBoxValues.checkBox1}
                onChange={handleCheckBoxChange}
              />
              The activity does not have any commercial support, and its
              organizers, planners and speakers do not have any relevant
              financial relationship with any ineligible company during the last
              24 months
            </span>
          </div>

          <div className="mb-6">
            <span className="block text-gray-600 font-medium text-sm">
              <input
                type="checkbox"
                name="checkBox2"
                checked={checkBoxValues.checkBox2}
                onChange={handleCheckBoxChange}
              />
              In case of any commercial support or relevant financial
              relationship, the nature of the relationship should be mentioned
              in the advertisements and banners of the activity
            </span>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
