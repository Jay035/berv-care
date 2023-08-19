import CustomInput from "@/components/CustomInput";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

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
          type="text"
          label="title"
          // dataTestId="blog-title"
          className="w-full mt-3 text-black border border-black py-2 md:py-4 px-4 rounded-lg"
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
              className="p-2 w-full rounded-lg border border-black"
              placeholder="Write your content in Markdown here..."
            />
          </div>
        </div>
      </section>
      <section className="col-span-1 ">
        <h1 className="text-lg font-medium mb-3">Preview</h1>
        <div className="border rounded-lg p-4">
          <h1 className="text-2xl mb-2 font-bold">{title && title}</h1>
          <div className="">
            {markdown && <ReactMarkdown>{markdown}</ReactMarkdown>}
          </div>
        </div>
      </section>
    </div>
  );
}
