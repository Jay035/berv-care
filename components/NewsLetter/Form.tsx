"use client"
import CustomInput from "../CustomInput";

type Props = {};

export default function Form({}: Props) {
  return (
    <form
      onSubmit={(e: any) => e.preventDefault()}
      className="flex items-center flex-col lg:flex-row gap-4"
    >
      <CustomInput
        type="text"
        dataTestId="newsletter email"
        className="w-full outline-none text-black py-3 md:py-4 px-4 rounded-[50px]"
        //   value=""
        name="search"
        // onchange="{handleSearch}"
        placeholder="Enter email addreess"
      />
      <button className="rounded-[50px] w-fit xl:min-w-[344px]  text-white bg-[#14532D] py-3 md:py-4 sm:py-[18px] px-6">
        Subscribe to newsletter
      </button>
    </form>
  );
}
