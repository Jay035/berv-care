import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <section className="px-8 sm:px-[5vw] mb-12 mt-16 border-t-2 pt-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 mb-4">
        <div className="">
          <Link href="/" className="flex gap-2 items-center mb-3">
            <Image
              className="w-7"
              src="/logo.svg"
              width={28}
              height={28}
              alt="logo"
            />
            <h1 className="text-2xl font-semibold tracking-tight text-[#14532D]">
              Berv-Care
            </h1>
          </Link>
        </div>
        <div className="">
          <h1 className="font-medium text-xl mb-2">Company</h1>
          <ul className="flex flex-col gap-1">
          <Link
            href="/#about_us"
           
            className="w-fit"
          >
            About us
          </Link>
          <Link
            href="/blog"
            className="w-fit"
          
          >
           Blog
          </Link>
          <Link
            href="/#howItWorks"
            className="w-fit"
          
          >
            How It Works
          </Link>
            {/* <li>Newsletter</li> */}
            <Link
            href="/#testimonials"
            className="w-fit"
            
          >
              Testimonials
          </Link>
          </ul>
        </div>
        <div className="">
          <h1 className="font-medium text-xl mb-2">Quick links</h1>
          <ul className="flex flex-col gap-1">
            <li>Book an appointment</li>
            <li>My Account</li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-medium text-xl mb-2">Contact </h1>
          <ul className="flex flex-col gap-1">
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Tiktok</li>
          </ul>
        </div>
      </div>

      <p>©2023 Berv-Care</p>
      <p>
        Design by{" "}
        <a href="https://twitter.com/uniquee_ideas" className="font-semibold">
          UniqueIdeas
        </a>
      </p>
    </section>
  );
}
