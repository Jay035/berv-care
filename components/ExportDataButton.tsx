import React from "react";

type Props = {
  handleExportData: (data: any) => void;
};

export default function ExportDataButton({ handleExportData }: Props) {
  return (
    <button
      onClick={handleExportData}
      className="border mt-3 p-2 rounded-lg font-medium w-full max-w-4xl mx-auto flex justify-center"
    >
      Export Data to CSV
    </button>
  );
}
