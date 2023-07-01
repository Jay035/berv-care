import { OutputData } from "@editorjs/editorjs";

type Props = { data: OutputData };
type ParsedContent = string | React.JSX.Element;

const editorJsHtml = require("editorjs-html");
const EditorJsToHtml = editorJsHtml();

export default function EditorRenderer({ data }: Props) {
  const html = EditorJsToHtml.parse(data) as ParsedContent[];

  return (
    <div className="prose max-w-full" key={data.time}>
      {html.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
          );
        }
        return item;
      })}
    </div>
  );
}
