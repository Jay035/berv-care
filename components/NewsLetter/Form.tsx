// "use client";
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
      className="flex items-center justify-center flex-col lg:flex-row gap-4"
    >
      <CustomInput
        type="email"
        // dataTestId="newsletter-email"
        style="w-full"
        className="w-full outline-none text-black py-3 md:py-4 px-4 rounded-[50px]"
        value={email}
        name="newsletter-sub"
        onChange={handleEmailChange}
        placeholder="Enter email address"

      />
      <button disabled={email === ""} className="rounded-[50px] w-fit lg:min-w-[250px] text-white bg-[#14532D] disabled:bg-[#14532D]/80 py-3 md:py-4 sm:py-[18px] px-6">
        Subscribe to newsletter
      </button>
    </form>
  );
}
