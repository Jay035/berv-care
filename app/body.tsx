"use client";
import Modal from "@/components/Modal";
import { Navbar } from "@/components/Navbar";
import { useGlobalProvider } from "@/context/GlobalProvider";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function BodyComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const { modalHeader } = useGlobalProvider();
  return (
    <QueryClientProvider client={queryClient}>
      {path !== "/login" && path !== "/signup" && <Navbar />}

      {children}

      {modalHeader === "Hospital information" && (
        <Modal modalHeader="Hospital information">
          <div className=""></div>
        </Modal>
      )}
    </QueryClientProvider>
  );
}
