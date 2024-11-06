import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-pink-300">
        <div className="d-flex justify-content-around gap-5 p-3">
          <Link to="/" className="text-decoration-none text-dark active">
            Search
          </Link>
          <Link
            to="/addYourDetails"
            className="text-decoration-none text-dark"
          >
            Add Details
          </Link>
          <Link
            to="/listOfStudents"
            className="text-decoration-none text-dark"
          >
            List of Students
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
