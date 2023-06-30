import React from "react";
import CustomInput from "../CustomInput";
import Form from "./Form";

type Props = {};

export default function NewsLetter({}: Props) {
  return (
    <section className="md:px-[9.5vw]">
      <div className="bg-[#DCFCE7] py-[78px] px-[9.5vw] md:px-[6vw]">
        <h1 className="text-center font-bold text-4xl -tracking-[2%]">
          Beat the Queue, Stay Healthy!
        </h1>
        <p className="text-center text-[#374151] mt-3 mb-8 sm:text-lg">
          Be the first to receive our weekly newletter as soon as it drops
        </p>
        <Form />
      </div>
    </section>
  );
}
