import Link from "next/link";

export default function GetStartedBtn() {
  return (
    <Link
      data-testid="get-started-btn"
      href="/hospitals"
      className="py-4 md:py-5 w-fit px-8 text-lg md:px-14 bg-[#14532D] text-white rounded-[50px] transition hover:border hover:border-[#14532D] hover:text-black hover:bg-transparent"
    >
      Get Started
    </Link>
  );
}
