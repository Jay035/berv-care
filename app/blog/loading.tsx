import { BlogPostLoader } from "@/components/PostLoader";

type Props = {};

export default function loading({}: Props) {
  return (
    <div className="px-[9.5vw]">
      <BlogPostLoader />;
    </div>
  );
}
