type Props = {};

export default function BlogPost({}: Props) {
  return (
    <section className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      <div className="text-left">
        <img src="/blog-1.png" alt="blog pics" />
        <h1 className="mt-[21px] mb-4 text-xl font-bold text-[#111827] tracking-tight">
          Brev: Your mobile healthcare
        </h1>
        <p className="text-[#6B7280]">
          Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar
          risus. Cursus in odio aenean.
        </p>
      </div>
      <div className="text-left">
        <img src="/blog-2.png" alt="blog pics" />
        <h1 className="mt-[21px] mb-4 text-xl font-bold text-[#111827] tracking-tight">
          Brev: Your mobile healthcare
        </h1>
        <p className="text-[#6B7280]">
          Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar
          risus. Cursus in odio aenean.
        </p>
      </div>
      <div className="text-left">
        <img src="/blog-3.png" alt="blog pics" />
        <h1 className="mt-[21px] mb-4 text-xl font-bold text-[#111827] tracking-tight">
          Brev: Your mobile healthcare
        </h1>
        <p className="text-[#6B7280]">
          Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar
          risus. Cursus in odio aenean.
        </p>
      </div>
    </section>
  );
}
