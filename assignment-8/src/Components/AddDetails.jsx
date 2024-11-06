import React, { createContext, useEffect, useState, useContext } from "react";
import apiData from "../../data.json";
import { ToastContainer, toast } from "react-toastify";
const SendDetails = createContext();
const AddDetails = ({ children }) => {
  const initialData = Array.isArray(
    JSON.parse(localStorage.getItem("addItems"))
  )
    ? JSON.parse(localStorage.getItem("addItems"))
    : apiData;
  const [addDetails, setAddDetails] = useState(initialData);
  const [inputValues, setInputValues] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    class: "",
  });
  useEffect(() => {
    localStorage.setItem("addItems", JSON.stringify(addDetails));
  }, [addDetails]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(inputValues).every((field) => field !== "")) {
      setAddDetails([...addDetails, inputValues]);
      setInputValues({
        name: "",
        age: "",
        email: "",
        phone: "",
        address: "",
        class: "",
      });
      toast.success("Student details added!");
    } else {
      toast.error("Fill all the fields");
    }
  };
  return (
    <SendDetails.Provider
      value={{
        addDetails,
        setAddDetails,
        inputValues,
        handleInputChange,
        handleSubmit,
      }}
    >
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </SendDetails.Provider>
  );
};
const UseDetails = () => useContext(SendDetails);
export { AddDetails, UseDetails };
