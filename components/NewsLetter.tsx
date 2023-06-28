import React from "react";
import CustomInput from "./CustomInput";

type Props = {};

export default function NewsLetter({}: Props) {
  return (
    <section className="md:px-[9.5vw]">
      <div className="bg-[#DCFCE7] py-[78px] px-[9.5vw] md:px-0">
        <h1 className="text-center font-bold text-4xl -tracking-[2%]">
          Beat the Queue, Stay Healthy!
        </h1>
        <p className="text-center text-[#374151] mt-3 mb-8 sm:text-lg">
          Be the first to receive our weekly newletter as soon as it drops
        </p>
        <div className="flex items-center flex-col md:flex-row gap-4">
          <CustomInput
            type="text"
            dataTestId="newsletter email"
            className="w-full outline-none text-black py-3 px-4 rounded-[50px]"
            //   value=""
            name="search"
            // onchange="{handleSearch}"
            placeholder="Enter email addreess"
          />
          <button className="rounded-[50px] w-64 md:w-[344px] text-white bg-[#14532D] py-4 sm:py-[18px] px-6">
            Subscribe to newsletter
          </button>
        </div>
      </div>
    </section>
  );
}
