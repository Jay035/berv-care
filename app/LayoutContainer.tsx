"use client";

import { Navbar } from "@/components/Navbar";
import { AuthProvider } from "@/context/Auth";

type Props = {};

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <Navbar />
      {children}
    </AuthProvider>
  );
}
