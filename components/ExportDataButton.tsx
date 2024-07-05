import { useGlobalProvider } from "@/context/GlobalProvider";

type Props = {
  handleExportData?: (data: any) => void;
  setDownloadButtonClicked?: (e: any) => void;
  data?: MarkerType[];
};

export default function ExportDataButton({
  handleExportData,
  setDownloadButtonClicked,
  data,
}: Props) {
  const { toggleModal, setModalHeader } = useGlobalProvider();

  return (
    <button
      onClick={(e) => {
        handleExportData?.(data);
        setDownloadButtonClicked?.(true);
        toggleModal?.();
        setModalHeader?.("Export");
      }}
      className="border mt-3 p-2 rounded-lg font-medium w-full max-w-4xl mx-auto flex justify-center"
    >
      Export Data to CSV
    </button>
  );
}
