import fs from "fs";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import path from "path";

type Props = {};

const fetchBlogContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  return content;
};

export default function PostPage(props: any) {
  const slug = props?.params?.slug;
  const content = fetchBlogContent(slug);
  return (
    <main>
      <Link href='/blog'>Go back</Link>
      <h1>{slug}</h1>
      <Markdown>{content}</Markdown>
    </main>
  );
}
