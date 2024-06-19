"use client";
import Modal from "@/components/Modal";
import { Navbar } from "@/components/Navbar";
import { useGlobalProvider } from "@/context/GlobalProvider";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import Distance from "./hospitals/components/Distance";

const queryClient = new QueryClient();

export default function BodyComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const { modalHeader, selectedHospitalInfo, directions } = useGlobalProvider();
  return (
    <QueryClientProvider client={queryClient}>
      {path !== "/login" && path !== "/signup" && <Navbar />}

      {children}

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
            <p className="mt-2">
              <span className="font-medium text-lg">Address: </span>{" "}
              <span>{selectedHospitalInfo?.vicinity}, Nigeria.</span>
            </p>
            {directions && <Distance leg={directions.routes[0].legs[0]} />}
          </div>
        </Modal>
      )}
    </QueryClientProvider>
  );
}
