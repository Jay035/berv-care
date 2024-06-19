import { useState } from "react";
import Pagination from "./Pagination";

export default function NearbyHospitals({ hospitals }: any) {
  const [data, setData] = useState(hospitals);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedItems = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    // hospitals && (
    <section className="mt-16">
      <h1 className="text-center text-[#14532D] font-extrabold text-3xl">
        Nearby hospitals
      </h1>

      <div className="my-12 grid gap-4 w-full lg:grid-cols-2">
        {paginatedItems?.map((hospital: MarkerType) => (
          <div
            key={hospital?.place_id}
            className="flex flex-col sm:flex-row sm:justify-between gap-3 w-full sm:items-center border border-[#2B7669] rounded-lg px-3 py-2"
          >
            <div className="">
              <h2 className="capitalize font-extrabold tracking-tight">
                {hospital?.name}
              </h2>
              <p>{hospital?.vicinity}, Nigeria.</p>
            </div>
            {hospital?.business_status && (
              <span className="text-xs w-fit font-semibold text-center bg-[#14532D]/80 text-white p-2 rounded-2xl ">
                {hospital?.business_status}
              </span>
            )}
          </div>
        ))}
      </div>
      {data?.length > 0 && (
        <Pagination
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          dataLength={data?.length}
          currentPage={currentPage}
        />
      )}
    </section>
    // )
  );
}
