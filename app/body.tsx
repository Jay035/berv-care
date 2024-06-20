"use client";
import Modal from "@/components/Modal";
import { Navbar } from "@/components/Navbar";
import { useGlobalProvider } from "@/context/GlobalProvider";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import Distance from "./hospitals/components/Distance";
import { useState } from "react";

const queryClient = new QueryClient();

export default function BodyComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const {
    modalHeader,
    selectedHospitalInfo,
    directions,
    downloadCSVLink,
    showModal,
  } = useGlobalProvider();

  const [isLinkCopied, setIsLinkCopied] = useState(false);

  function copyToClipboard() {
    let text = downloadCSVLink;
    navigator.clipboard.writeText(text!).then(
      function () {
        console.log("Copying link was successful");
        setIsLinkCopied((prevstate) => !prevstate);
        setTimeout(() => {
          setIsLinkCopied((prevstate) => !prevstate);
        }, 1000);
      },
      function (err) {
        console.error("Could not copy text:", err);
      }
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      {path !== "/login" && path !== "/signup" && <Navbar />}

      {children}

      {/* MODAL  */}
      {modalHeader === "Hospital information" && (
        <Modal modalHeader="Hospital information">
          <div className="mt-[1.62rem]">
            <div className="md:flex justify-between items-center">
              <h1 className="capitalize font-extrabold text-[#14532D] text-3xl tracking-tight md:text-4xl">
                {selectedHospitalInfo?.name}
              </h1>
              <div className="my-2 flex gap-2 items-center">
                {selectedHospitalInfo?.business_status && (
                  <span className="text-xs font-semibold bg-[#14532D] text-white p-2 rounded-2xl ">
                    {selectedHospitalInfo?.business_status}
                  </span>
                )}
                {selectedHospitalInfo?.opening_hours?.open_now && (
                  <span className="text-xs font-semibold w-16 text-center bg-[#14532D] text-white p-2 rounded-2xl ">
                    Open
                  </span>
                )}
              </div>
            </div>
            <p className="my-2">
              <span className="font-medium text-lg">Address: </span>{" "}
              <span>{selectedHospitalInfo?.vicinity}, Nigeria.</span>
            </p>
            {selectedHospitalInfo?.rating && (
              <p>Rating: {selectedHospitalInfo?.rating}</p>
            )}
            {directions && <Distance leg={directions.routes[0].legs[0]} />}
          </div>
        </Modal>
      )}
      {modalHeader === "Export" && (
        <Modal modalHeader="Export">
          {downloadCSVLink ? (
            <div className="flex flex-col gap-6 w-96 h-48 mx-auto text-center justify-center">
              <button
                onClick={copyToClipboard}
                className="bg-green-500 px-4 p-2 rounded-md"
              >
                {isLinkCopied ? "Copied!!" : "Copy link"}
              </button>
              <a href={downloadCSVLink} className="border px-4 p-2 rounded-md">
                Download generated CSV
              </a>
            </div>
          ) : (
            <p className="">
              Loading<span className="animate-pulse">...</span>
            </p>
          )}
        </Modal>
      )}
    </QueryClientProvider>
  );
}
