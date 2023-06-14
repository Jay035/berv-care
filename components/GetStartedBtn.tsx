import Link from "next/link";

type Props = {};

export default function GetStartedBtn({}: Props) {
  return (
    <Link
      href="/hospitals"
      className="py-4 md:py-5 w-fit px-8 text-lg md:px-14 bg-[#14532D] text-white rounded-[50px] transition hover:text-black hover:bg-white hover:border hover:border-black"
    >
      Get Started
    </Link>
  );
}
