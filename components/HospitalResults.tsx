"use client";

// HOOKS
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// COMPONENTS 
import CustomInput from "./CustomInput";
import useGeoLocation from "@/hooks/useGeoLocationHook";
import { convertDataToCSV } from "@/utils/csvUtils";
import { UploadCSVToFirebaseStorage } from "@/utils/firebaseUtils";
import ExportDataButton from "./ExportDataButton";
import DownloadModal from "./DownloadModal";

export default function HospitalResults({ hospitals }: any) {
  const [downloadCSVLink, setDownloadCsvLink] = useState("");
  const [downloadButtonClicked, setDownloadButtonClicked] = useState(false);
  const [usersRegion, setUsersRegion] = useState("");
  const [data, setData] = useState(hospitals?.data);
  const [hospitalLocationSelected, setHospitalLocationSelected] =
    useState("all");
  const [query, setQuery] = useState("");
  const [searchError, setSearchError] = useState("");

  const filteredHospitals = hospitals?.data?.filter((el: HospitalProps) =>
    el?.state?.name.toLowerCase().includes(query.toLowerCase())
  );
  const nearbyHospitals = hospitals?.data?.filter((el: HospitalProps) =>
    el?.state?.name.toLowerCase().includes(usersRegion?.toLowerCase())
  );

  const {
    userLocation,
  } = useGeoLocation();

  // PAGINATION
  const [currentSliceStart, setCurrentSliceStart] = useState<number>(0);
  const [currentSliceEnd, setCurrentSliceEnd] = useState<number>(12);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const next = () => {
    setCurrentSliceStart(currentSliceStart + 12);
    setCurrentSliceEnd(currentSliceEnd + 12);
    setCurrentPage(currentPage + 1);
  };

  const previous = () => {
    setCurrentSliceStart(currentSliceStart - 12);
    setCurrentSliceEnd(currentSliceEnd - 12);
    setCurrentPage(currentPage - 1);
  };

 

  const handleSearch = (e: any) => {
    e.preventDefault();
    try {
      if (filteredHospitals.length === 0) {
        setData(hospitals?.data);
      } else {
        setData(filteredHospitals);
      }
      setQuery(e.target.value);
      setHospitalLocationSelected(e.target.value);
      setSearchError("");
    } catch (error) {
      throw new Error("Failed to fetch and export data.");
    }
  };

  const handleExportData = async () => {
    try {
      const csvData = convertDataToCSV(data);
      console.log(csvData);
      await UploadCSVToFirebaseStorage(
        csvData,
        setDownloadCsvLink,
        hospitalLocationSelected,
      );
     console.log("Data exported successfully");
    } catch (err: any) {
      console.log(err);
      console.error(err.message);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setData(filteredHospitals);
    if (query === "") {
      setSearchError("Please submit a value");
    }
  };
  // console.log(data);

  useEffect(() => {
    // getResult();
  }, []);

  return (
    <section className="">
      {downloadButtonClicked && (
        <DownloadModal
          downloadCSVLink={downloadCSVLink}
          setDownloadButtonClicked={setDownloadButtonClicked}
        />
      )}
      {data?.length > 0 && (
        <form
          className="max-w-4xl w-full lg:mx-auto"
          //  onSubmit={handleSubmit}
        >
          <div className="flex items-center text-[#9CA3AF] py-2 px-2 md:px-3 gap-[9.5px] border rounded-lg w-full md:border-[#6B7280]">
            <Image
              src="/search-icon.png"
              alt="search icon"
              width={18}
              height={18}
              // className="py-2"
            />
            <CustomInput
              type="text"
              style="w-full"
              // label=""
              // dataTestId="searchbar"
              autocomplete="off"
              className="w-full selection:bg-black outline-none text-black"
              value={query}
              name="search"
              onChange={handleSearch}
              placeholder="Enter your Location (State)"
            />
          </div>
          {query && (
            <p className="mt-2">
              Search result for{" "}
              <span className="text-[#14532d]">&apos;{query}&apos;</span>
            </p>
          )}
          {searchError && <p className="text-red-500">{searchError}</p>}
        </form>
      )}

      {data?.length > 0 && (
        <ExportDataButton
          handleExportData={handleExportData}
          setDownloadButtonClicked={setDownloadButtonClicked}
        />
      )}

      <div className="my-12 grid gap-4 w-full lg:grid-cols-2">
        {data
          ?.slice(currentSliceStart, currentSliceEnd)
          ?.map((hospital: HospitalProps) => (
            <section
              key={hospital?.id}
              className="flex justify-between gap-3 w-full items-center border border-[#2B7669] rounded-lg px-3 py-2"
            >
              <div
                id="max-w-sm"
                className="flex flex-col gap-2 w-fit max-w-[240px]"
              >
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

      {data?.length > 0 && (
        <div className="flex gap-10 justify-center items-center my-8">
          <button
            disabled={currentPage === 1}
            // disabled={currentSliceStart <= 12}
            className="bg-[#14532D] text-white px-4 py-3 rounded-lg disabled:bg-[#14532D]/70"
            onClick={previous}
          >
            Previous
          </button>
          <button
            disabled={currentSliceEnd > data?.length}
            className="bg-[#14532D] text-white px-4 py-3 rounded-lg disabled:bg-[#14532D]/70"
            onClick={next}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
