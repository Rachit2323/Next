"use client";
import React, { useState, useEffect } from "react";

const Entry = () => {
  const tableHeaders = [
    "CPSP ID",
    "Title",
    "Full Name",
    "Father's/Husband's Name",
    "Gender",
    "CNIC",
    "Passport",
    "PMDC",
    "Designation",
    "Speciality",
    "Institution",
    "Mailing Address",
    "Town/City",
    "Country",
    "Telephone Number",
    "Email Address",
    "Selected Category",
    "Selected Payment Method",
    "Slip/Reference Number",
    "Action",
  ];

  const [data, setData] = useState([]);
  const [editStates, setEditStates] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/form", {
        method: "GET",
      });
      if (res.ok) {
        const result = await res.json();

          console.log(typeof(result.result));
          setData(result.result);
          setEditStates(
            new Array(result.result.length).fill({ isEditing: false })
          );
      
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  

  const handleEditClick = (index) => {
    const newEditStates = [...editStates];
    newEditStates[index] = { isEditing: true };
    setEditStates(newEditStates);
  };

  const handleSaveClick = async (index, id) => {
    const newEditStates = [...editStates];
    newEditStates[index] = { isEditing: false };
    setEditStates(newEditStates);
  
    try {
      const updatedData = data[index];
  
      const res = await fetch(`http://localhost:3000/api/form/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
  
      if (res.ok) {
        const result = await res.json();
        setData((prevData) => {
          // Update the data state using the previous state
          const newData = [...prevData];
          newData[index] = result.result; // Update the specific item with the new data
          return newData;
        });
      } else {
        console.error("Failed to update data:", res.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  
  const handleDeleteClick = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/form/${id}`, {
        method: "DELETE",
      });
  
      if (res.ok) {
        // const result = await res.json();
        // Use the filter method to remove the deleted item from the data state
        setData((prevData) => prevData.filter((item) => item._id !== id));
      } else {
        console.error("Failed to delete data:", res.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const renderItemValue = (item, index, key) => {
    const isEditing = editStates[index]?.isEditing;
    const fieldValue = item[key] || "N/A";

    if (isEditing) {
      return (
        <input
          type="text"
          value={fieldValue}
          onChange={(e) => handleInputChange(e, index, key)}
          className={`${
            isEditing ? "border border-blue-500 p-1" : "border-none"
          }`}
        />
      );
    }

    return (
      <span className={`${isEditing ? "border border-blue-500 p-1" : "p-2"}`}>
        {fieldValue}
      </span>
    );
  };

  const handleInputChange = (e, index, key) => {
    const newData = [...data];
    newData[index][key] = e.target.value;
    setData(newData);
  };
  

  return (
    <div className="py-4">
      <h1 className="text-xl font-semibold mb-4">Entry Table</h1>
      <div className="max-h-96 overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {Array?.isArray(data) &&data?.map((item, index) => (
              <tr key={item?._id}>
                {Object.keys(item).map(
                  (key) =>
                    key !== "_id" &&
                    key !== "__v" && (
                      <td key={key} className="px-6 py-4 whitespace-nowrap">
                        {renderItemValue(item, index, key)}
                      </td>
                    )
                )}

                <td className="px-6 py-4 whitespace-nowrap">
                  {editStates[index]?.isEditing ? (
                    <button
                      className="text-blue-600 hover:underline mr-2"
                      onClick={() => handleSaveClick(index, item?._id)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="text-blue-600 hover:underline mr-2"
                        onClick={() => handleEditClick(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:underline"
                        onClick={() => handleDeleteClick(item?._id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Entry;
