type Props = {
  downloadCSVLink: string;
  setDownloadButtonClicked: (e: any) => void;
};

export default function DownloadModal({
  downloadCSVLink,
  setDownloadButtonClicked,
}: Props) {
  console.log(downloadCSVLink);
  return (
    <div className="absolute z-[99999999999999999999] top-0 left-0 bg-[#eeee]/50 backdrop-blur-sm w-full h-screen flex justify-center items-center">
      <div className="bg-white w-96 h-48 flex justify-center items-center rounded-lg relative">
        <button
          className="absolute top-0 right-0"
          onClick={() => {
            setDownloadButtonClicked(false);
          }}
        >
          <i className="ri-close-circle-fill text-2xl"></i>
        </button>
        <a href={downloadCSVLink} className="bg-green-500 px-4 p-2 rounded-md">
          Download generated CSV
        </a>
      </div>
    </div>
  );
}
