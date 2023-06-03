import Image from "next/image";

type Props = {};

export default function CustomInput({}: Props) {
  return (
      <div className="flex justify-start items-center flex-none flex-grow-0 text-[#9CA3AF] py-2 px-2 md:py-0.5 md:px-6 gap-[9.5px] border rounded-lg w-full md:border-0 md:rounded-none md:border-r-2 md:border-[#6B7280]">
        <Image
          src="/search-icon.png"
          alt="search icon"
          width={18}
          height={18}
        />
        <input
          type="text"
          placeholder="Enter Hospital name or Location"
          className="w-full md:w-fit outline-none"
        />
      </div>
  );
}
