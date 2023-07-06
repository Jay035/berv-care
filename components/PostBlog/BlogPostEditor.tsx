import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";
import Quote from "@editorjs/quote";
import LinkTool from "@editorjs/link";
import RawTool from "@editorjs/raw";
import Table from "@editorjs/table";
import React, { memo, useEffect, useRef, useState } from "react";
import EditorJS, { OutputData, ToolSettings } from "@editorjs/editorjs";
import { ref } from "firebase/storage";
import { storage, storageRef } from "@/config/Config";

type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
  holder: string;
};

function EditorBlock({ data, onChange, holder }: Props) {
  const ref = useRef<EditorJS>();
  const [imageUpload, setImageUpload] = useState();

  // const uploadFile = async (file) => {
  //   const imageRef = storageRef.child(`images/${file.name}`);
  //   await imageRef.put(file);
  //   const imageUrl = await imageRef.getDownloadURL();
  //   return { success: 1, file: { url: imageUrl } };
  // };

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
            // config: {
            // uploader: {
            //   uploadByFile(file: File): Promise<ImageToolData> {
            //     return uploadImageToFirebaseStorage(file);
            //   },
            // },
            // } as ToolSettings<ImageToolConfig>,
          },
          // raw: RawTool,
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

  return <div id={holder} className="prose max-w-full p-4" />;
}

export default memo(EditorBlock);

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// type EditorProps = {
//   value: string;
//   onChange: (value: string) => void;
// };

// const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
//   return <ReactQuill value={value} onChange={onChange} />;
// };

// export default Editor;
