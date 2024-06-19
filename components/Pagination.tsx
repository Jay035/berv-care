import { useState } from "react";

type Props = {
  currentPage: number;
  dataLength: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  dataLength,
  itemsPerPage,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(dataLength / itemsPerPage);

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex gap-5 justify-center items-center my-8 mx-6">
      <button
        disabled={currentPage === 1}
        className="bg-[#14532D] text-white px-4 py-3 rounded-lg disabled:bg-[#14532D]/70"
        onClick={() => handlePageClick(currentPage - 1)}
      >
        Previous
      </button>
      {/* <div className="flex gap-4 text-lg items-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={`border w-8 h-8 rounded-lg 
                `}
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
      <button
        disabled={currentPage === totalPages}
        className="bg-[#14532D] text-white px-4 py-3 rounded-lg disabled:bg-[#14532D]/70"
        onClick={() => handlePageClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
