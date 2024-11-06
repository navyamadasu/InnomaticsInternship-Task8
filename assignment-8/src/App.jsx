import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentsList from './Components/StudentsList';
import StudentSearch from './Components/StudentSearch';
import Navbar from './Components/Navbar';
import ViewDetails from './Components/ViewDetails';
import { AddDetails } from './Components/AddDetails';
import AddDetailsForm from './Components/AddDetailsForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AddDetails>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentSearch />} />
        <Route path="/viewDetails/:id" element={<ViewDetails />} />
        <Route path="/listOfStudents" element={<StudentsList />} />
        <Route path="/addYourDetails" element={<AddDetailsForm />} />
      </Routes>
    </AddDetails>
  );
};

export default App;