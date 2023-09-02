import { useState } from "react";
import { toast } from "react-toastify";

type Props = {
  downloadCSVLink: string;
  setDownloadButtonClicked: (e: any) => void;
};

export default function DownloadModal({
  downloadCSVLink,
  setDownloadButtonClicked,
}: Props) {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  function copyToClipboard() {
    let text = downloadCSVLink;
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Copying link was successful");
        toast.success("Copying link was successful");
        setIsLinkCopied(!isLinkCopied);
        setTimeout(() => {
          setDownloadButtonClicked(false);
        }, 3000);
      },
      function (err) {
        console.error("Could not copy text:", err);
        toast.error("Could not copy text:", err);
      }
    );
  }
  return (
    <div className="absolute z-[99999999999999999] top-0 left-0 bg-[#eeee]/50 backdrop-blur-sm w-full h-screen flex justify-center items-center">
      <div className="bg-white w-96 h-48 text-center flex justify-center items-center rounded-lg relative">
        <button
          className="absolute top-0 right-0"
          onClick={() => {
            setDownloadButtonClicked(false);
          }}
        >
          <i className="ri-close-circle-fill text-2xl"></i>
        </button>
        {downloadCSVLink ? (
          <div className="flex flex-col gap-6">
            <button
              onClick={copyToClipboard}
              className="bg-green-500 px-4 p-2 rounded-md"
            >
              {isLinkCopied ? "Copied!!" : "Copy link"}
            </button>
            <a href={downloadCSVLink} className="border px-4 p-2 rounded-md">
              Download generated CSV
            </a>
          </div>
        ) : (
          <p className="">Loading...</p>
        )}
      </div>
    </div>
  );
}
