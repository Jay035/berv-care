"use client";
import CustomInput from "../CustomInput";

interface Props {
  email: string;
  handleEmailChange?: (x: any) => void;
  handleSubscribe?: (x: any) => void;
}

export default function Form({
  email,
  handleEmailChange,
  handleSubscribe,
}: Props) {
  return (
    <form
    id="newsletter-form"
      onSubmit={handleSubscribe}
      className="flex items-center flex-col lg:flex-row gap-4"
    >
      <CustomInput
        type="email"
        dataTestId="newsletter email"
        className="w-full outline-none text-black py-3 md:py-4 px-4 rounded-[50px]"
        value={email}
        name="newsletter-sub"
        onchange={handleEmailChange}
        placeholder="Enter email address"
      />
      <button className="rounded-[50px] w-fit xl:min-w-[344px]  text-white bg-[#14532D] py-3 md:py-4 sm:py-[18px] px-6">
        Subscribe to newsletter
      </button>
    </form>
  );
}
