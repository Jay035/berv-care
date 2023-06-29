import Image from "next/image";
import GetStartedBtn from "./GetStartedBtn";
import { HowItWorksData } from "./data";

type DataProps = {
  title: string;
  description: string;
};

export default function HowItWorks({}) {
  return (
    <section id="howItWorks" className="px-[9.5vw] my-28 pt-20 pb-24 bg-[#FDE68A]">
      <h1 className="text-[28px] md:text-[32px] tracking-tight text-[#14532D] leading-10 font-semibold">
        How it works?
      </h1>
      <div className="mt-14 mb-20 grid gap-y-12 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
        {HowItWorksData?.map(
          ({ title, description }: DataProps, index: number) => (
            <div key={index} className="flex flex-col gap-5">
              <Image src="/Vector-1.svg" width={48} height={48} alt="vector" />
              <div className="">
                <h2 className="text-[20px] font-semibold mb-2 tracking-tight">
                  {title}
                </h2>
                <p className="text-[#374151]">{description}</p>
              </div>
            </div>
          )
        )}

        {/* <div className="flex flex-col gap-5">
          <Image src="/Vector-1.svg" width={48} height={48} alt="vector" />
          <div className="">
            <h2 className="text-[20px] font-semibold mb-2">
              View Health Centre
            </h2>
            <p className="text-[#374151]">
              Click on the health centre you'll like to view to see more details
              about it{" "}
            </p>
          </div>
        </div> */}
      </div>
      <GetStartedBtn />
    </section>
  );
}
