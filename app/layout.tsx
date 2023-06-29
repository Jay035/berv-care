import { Navbar } from "@/components/Navbar";
import "./globals.css";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

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
  openGraph: {
    title: "Berv-Care",
    description: "Your Pathway to Trusted Care Providers",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={TomatoGrotesk.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
