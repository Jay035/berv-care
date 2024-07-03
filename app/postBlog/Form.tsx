import CustomInput from "@/components/CustomInput";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  title: string;
  markdown: string;
  setTitle: (e: any) => void;
  setMarkdown: (e: any) => void;
};

export default function Form({
  title,
  markdown,
  setTitle,
  setMarkdown,
}: Props) {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <section className="col-span-1">
        <CustomInput
          autoFocus={true}
          autocomplete="off"
          type="text"
          label="title"
          // dataTestId="blog-title"
          className="w-full outline-green-950 mt-3 text-black border border-black py-2 md:py-4 px-4 rounded-lg"
          value={title}
          name="blog-title"
          onChange={(e: any) => setTitle(e.target.value)}
          placeholder=""
        />

        <div className="">
          <h1 className="text-lg font-medium my-3">Content</h1>

          <div>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              rows={10}
              cols={50}
              className="p-2 w-full outline-green-950 rounded-lg border border-black"
              placeholder="Write your content in Markdown here..."
            />
          </div>
        </div>
      </section>
      <section className="col-span-1">
        <h1 className="text-lg font-medium mb-3">Preview</h1>
        <div className="border rounded-lg p-4 prose prose-slate prose-a:text-[#DD2D4A]">
          <h1 className="mb-2 text-[40px] leading-[1] font-bold">{title && title}</h1>
          <div className="">
            {markdown && (
              <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
