import BlogPost from "@/components/Blog/BlogPost";
import getBlogs from "@/components/getBlogs";
import { sortByDate } from "@/utils/index";

export default function Blog() {
  const blogs = getBlogs();
  return (
    <div
      id="healthCenter"
      className="px-[9.5vw] mt-10 mb-[97px] text-center flex flex-col items-center"
    >
      <h3 className="text-[#14532D] font-semibold lg:text-lg">OUR HEALTH CENTER</h3>
      <h1 className="text-[28px] md:text-[32px] w-full lg:text-5xl max-w-screen-md leading-10 mt-3 mb-[47px] font-bold tracking-tight">
        Read our latest medical and lifestyle articles
      </h1>
      <section className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 w-full ">
        {blogs.sort(sortByDate).map((post, index) => (
          <BlogPost post={post} key={index} />
        ))}
      </section>
    </div>
  );
}
