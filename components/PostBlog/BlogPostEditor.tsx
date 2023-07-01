import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";
import Quote from "@editorjs/quote";
import LinkTool from "@editorjs/link";
import RawTool from "@editorjs/raw";
import Table from "@editorjs/table";
import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";

type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
  holder: string;
};

function EditorBlock({ data, onChange, holder }: Props) {
  const ref = useRef<EditorJS>();
  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        placeholder: "Let`s write an awesome story!",
        // autofocus: true,
        holder: holder,
        // logLevel: "ERROR",
        tools: {
          header: Header,
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching,
            },
          },
          quote: Quote,
          image: {
            class: ImageTool,
            inlineToolbar: true,
          },
          raw: RawTool,
          table: Table,
        },
        data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id={holder} className="prose max-w-full px-2 py-2" />;
}

export default memo(EditorBlock);
