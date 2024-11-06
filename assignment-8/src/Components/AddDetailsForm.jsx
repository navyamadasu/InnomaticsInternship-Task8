import React from "react";
import { UseDetails } from "./AddDetails";
const AddDetailsForm = () => {
  const { inputValues, handleInputChange, handleSubmit } = UseDetails();
  return (
    <div className="add-details-form">
      <h1 className="text-center fw-bold  mt-3">Add Your Details</h1>
      <form className=" d-flex justify-content-center" onSubmit={handleSubmit}>
        <div className="inputClass studentsForm w-50 mt-3 p-5 shadow-lg rounded-4">
          <div className="text-left">
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name . . ."
              className="mt-1 d-block w-100"
              value={inputValues.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter your email . . ."
              className="mt-1 d-block w-100"
              value={inputValues.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            Age:
            <input
              type="number"
              name="age"
              placeholder="Enter your age . . ."
              className="mt-1 d-block w-100"
              value={inputValues.age}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            Class:
            <input
              type="text"
              name="class"
              placeholder="Enter your class . . ."
              className="mt-1 d-block w-100"
              value={inputValues.class}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            Phone Number:
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number . . ."
              className="mt-1 d-block w-100"
              value={inputValues.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            Address:
            <input
              type="text"
              name="address"
              placeholder="Enter your address . . ."
              className="mt-1 d-block w-100"
              value={inputValues.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
          >
            Add Details
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddDetailsForm;
