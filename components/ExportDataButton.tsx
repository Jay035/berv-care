import React from "react";

type Props = {
  handleExportData: (data: any) => void;
  setDownloadButtonClicked: (e: any) => void;
};

export default function ExportDataButton({
  handleExportData,
  setDownloadButtonClicked,
}: Props) {
  return (
    <button
      onClick={(e) => {
        handleExportData(e);
        setDownloadButtonClicked(true);
      }}
      className="border mt-3 p-2 rounded-lg font-medium w-full max-w-4xl mx-auto flex justify-center"
    >
      Export Data to CSV
    </button>
  );
}
