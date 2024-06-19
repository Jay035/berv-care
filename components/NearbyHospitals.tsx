import { useState } from "react";
import Pagination from "./Pagination";

type Props = {
  hospitals: any;
  moveTo: (pos: google.maps.LatLngLiteral) => void;
};

export default function NearbyHospitals({ hospitals, moveTo }: Props) {
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
              <p className="truncate max-w-[240px] sm:max-w-sm lg:max-w-[240px] xl:max-w-sm">{hospital?.vicinity}, Nigeria.</p>
            {hospital?.business_status && (
              <span className="text-xs border border-black rounded-2xl font-semibold py-[2px] px-2">
                {hospital?.business_status}
              </span>
            )}
            </div>
            <button
            className="w-fit text-sm sm:text-base whitespace-nowrap font-semibold text-center bg-[#14532D]/90 text-white p-2 px-4 rounded-2xl "
              onClick={() => {
                moveTo(hospital?.geometry?.location);
                window.scrollTo(0, 250);
              }}
            >
              View on map
            </button>
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
