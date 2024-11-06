import React, { useState } from "react";
import { UseDetails } from "./AddDetails";
const StudentsList = () => {
  const { addDetails } = UseDetails();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const trimItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return addDetails.slice(startIndex, startIndex + itemsPerPage);
  };
  const totalPages = Math.ceil(addDetails.length / itemsPerPage);
  const goToNextPage = () =>
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const goToPreviousPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  return (
    <main>
      <section>
        <table className="table table-light table-striped w-50 m-auto mt-4">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Class</th>
            </tr>
          </thead>
          <tbody>
            {trimItems().map((item, index) => (
              <tr key={index}>
                <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <nav aria-label="...">
          <ul className="pagination d-flex justify-content-center mt-4">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={goToPreviousPage}>
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button className="page-link" onClick={goToNextPage}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
};
export default StudentsList;
