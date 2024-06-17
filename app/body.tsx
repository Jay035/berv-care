"use client";
import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function BodyComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname()
  return (
    <QueryClientProvider client={queryClient}>
      {(path !== "/login" && path !== "signup") && <Navbar />}
      
      {children}
      </QueryClientProvider>
  );
}
