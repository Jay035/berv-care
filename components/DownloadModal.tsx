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
    <div className="absolute top-0 left-0 bg-white w-full h-screen flex justify-center items-center">
      <a
        href={downloadCSVLink}
        className="bg-green-500 px-4 p-2 rounded-md"
        onClick={() => {
          setDownloadButtonClicked(false);
        }}
      >
        Download generated CSV
      </a>
    </div>
  );
}
