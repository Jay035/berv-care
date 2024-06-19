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
        className="border border-[#14532D] text-[#14532D] px-4 py-3 rounded-lg disabled:opacity-80 disabled:hover:opacity-100 hover:bg-[#14532D] hover:text-white"
        onClick={() => handlePageClick(currentPage - 1)}
      >
        <i className="ri-arrow-left-line"></i>
        {/* Previous */}
      </button>
      <div className="flex gap-4 text-lg items-center">
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
      </div>
      <button
        disabled={currentPage === totalPages}
        className="border bg-[#14532D] text-white border-[#14532D]  px-4 py-3 rounded-lg disabled:opacity-80 disabled:hover:opacity-100 hover:bg-[#14532D] hover:text-white"
        onClick={() => handlePageClick(currentPage + 1)}
      >
        <i className="ri-arrow-right-line"></i>
        {/* Next */}
      </button>
    </div>
  );
}
