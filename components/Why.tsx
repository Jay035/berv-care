type Props = {};

export default function Why({}: Props) {
  return (
    <section className="px-[9.5vw] mb-28">
      <h1 className="text-[28px] md:text-[32px] tracking-tight text-[#14532D] leading-10 font-semibold">
        Why Berv-Care?
      </h1>

      <p className="mt-4">
        We have designed our platform with a user-centric approach. Our
        intuitive interface and easy-to-use features make the process of finding
        care closest to you effortless.{" "}
      </p>

      <div className="mt-[32.5px] ">
        <div className="grid w-full md:grid-cols-[40%_auto]">
          <section className="bg-[#DCFCE7] py-11 px-6 ">
            <p className="text-3xl">
              Find the health care facility within your region easily
            </p>
          </section>
          <section>
            <img className="object-fit lg:max-w-[727px] md:max-h-[285px] w-full" src="/img-2.jpg" />
          </section>
        </div>
        <div className="grid w-full md:grid-cols-[auto_40%]">
          <section>
            <img className="w-full md:max-h-[285px]" src="/img-4.jpg" />
          </section>
          <section className="bg-[#FEF3C7] py-11 px-6 ">
            <p className="text-3xl">
              Talk to the best doctors. Discover the best way to stay healthy
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
