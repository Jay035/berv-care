import Image from "next/image";

type Props = {};

export default function CustomInput({}: Props) {
  return (
      <div className="flex justify-start max-w-4xl lg:mx-auto items-center text-[#9CA3AF] py-2 px-2 md:px-3 gap-[9.5px] border rounded-lg w-full md:border-[#6B7280]">
        <Image
          src="/search-icon.png"
          alt="search icon"
          width={18}
          height={18}
        />
        <input
          type="text"
          placeholder="Enter Hospital name or Location"
          className="w-full outline-none"
        />
      </div>
  );
}
