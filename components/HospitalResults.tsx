"use client";
import Link from "next/link";
import CustomInput from "./CustomInput";
import { Suspense, useState } from "react";

export default function HospitalResults({ hospitals }: any) {
  const [data, setData] = useState(hospitals?.data);
  const [query, setQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const filteredHospitals = hospitals?.data?.filter((el: HospitalProps) =>
    el?.state?.name.toLowerCase().includes(query.toLowerCase())
  );
  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log(filteredHospitals);
    setData(filteredHospitals);
    setQuery(e.target.value);
    setSearchError("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setData(filteredHospitals);
    if (query === "") {
      setSearchError("Please submit a value");
    }
  };

  return (
    <section className="">
      <form onSubmit={handleSubmit}>
        <CustomInput
          type="text"
          className="w-full outline-none text-black"
          query={query}
          search={handleSearch}
          placeholder="Enter your Location"
        />
        {query && (
          <p className="mt-2">
            Search result for{" "}
            <span className="text-[#14532d]"> '{query}' </span>
          </p>
        )}
        {searchError && <p className="text-red-500">{searchError}</p>}
      </form>
      {/* search result for "" */}
      {/* Results */}
      {/* <Suspense fallback={<p>Loading feed...</p>}>
        </Suspense> */}

      <div className="my-12 grid gap-4 w-full">
        {data?.map((hospital: HospitalProps) => (
          <section
            key={hospital?.id}
            className="flex justify-between gap-3 w-full items-center border border-[#2B7669] rounded-lg px-3 py-2"
          >
            <div className="flex flex-col gap-2 w-fit max-w-[240px]">
              <h2 className="font-bold text-[#14532d]">{hospital?.name}</h2>
              <p className="text-[#6B7280]  truncate">{hospital?.address}</p>
            </div>
            <Link
              href={`/hospitals/${hospital?.id}`}
              className="bg-[#14532D] py-2 px-4 text-white rounded-[30px] transition hover:text-black hover:bg-white hover:border hover:border-black"
            >
              View
            </Link>
          </section>
        ))}
      </div>
    </section>
  );
}
