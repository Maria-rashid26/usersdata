import React from "react";
const Pagination = ({
  totalmember,
  membersPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalmember / membersPerPage); i++)
    pages.push(i);
  return (
    <div className="grid  grid-flow-col gap-1  justify-center align-middle  mx-5 w-[850px]">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage
                ? "bg-indigo-500 text-white border-indigo-800 border-2 h-9 w-9 rounded  font-bold"
                : "border-indigo-500 border-2 h-9 w-9 rounded text-gray-700 font-bold"
            }
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
