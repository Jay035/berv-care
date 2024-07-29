import "./globals.css";
import "remixicon/fonts/remixicon.css";
import localFont from "next/font/local";
import { Metadata } from "next";

// COMPONENTS
import ScrollToTop from "@/components/ScrollToTop";
import Transition from "@/components/Transition";
import { BlogContextProvider } from "@/context/BlogContext";
import { GlobalProvider } from "@/context/GlobalProvider";
import BodyComponent from "./body";

const TomatoGrotesk = localFont({
  src: [
    {
      path: "./Tomato_Grotesk/TomatoGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Tomato_Grotesk/TomatoGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Tomato_Grotesk/TomatoGrotesk-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Tomato_Grotesk/TomatoGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Tomato_Grotesk/TomatoGrotesk-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Berv-Care",
  description: "Your Pathway to Trusted Care Providers",
  icons: {
    icon: "/logo.svg",
  },
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "cyan" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1e1e1e" />
        <link rel="preconnect" href="https://berv-care-49a8d.firebaseapp.com" />
        <link rel="preconnect" href="https://firestore.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${TomatoGrotesk.className} scroll-smooth relative max-w-[2000px] mx-auto overflow-x-hidden`}
      >
        <GlobalProvider>
          <BlogContextProvider>
            {/* <Transition /> */}
            <ScrollToTop />
            <BodyComponent>{children}</BodyComponent>
          </BlogContextProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
