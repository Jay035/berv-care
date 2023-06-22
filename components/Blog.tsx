import BlogPost from "./BlogPost";

type Props = {};

export default function Blog({}: Props) {
  return (
    <section
      id="healthCenter"
      className="px-[9.5vw] pt-4 mb-28 text-center md:text-left"
    >
      <h3 className="text-[#14532D] font-semibold">OUR HEALTH CENTER</h3>
      <h1 className="text-[28px] md:text-[32px] w-full max-w-[515px] leading-10 mt-3 mb-[47px] font-bold tracking-tight">
        Read our latest medical and lifestyle articles
      </h1>
      <BlogPost />
    </section>
  );
}
