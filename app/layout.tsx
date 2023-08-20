import { Navbar } from "@/components/Navbar";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Transition from "@/components/Transition";
import { AuthProvider } from "@/context/Auth";
import { BlogContextProvider } from "@/context/BlogContext";
import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "@/components/ToastProvider";

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
    // {
    //   path: './Roboto-Italic.woff2',
    //   weight: '400',
    //   style: 'italic',
    // },
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`${TomatoGrotesk.className} relative`}>
        <AuthProvider>
          <ToastProvider>
            <ScrollToTop />
            <Transition />
            <Navbar />
            <BlogContextProvider>{children}</BlogContextProvider>
            <Footer />
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
