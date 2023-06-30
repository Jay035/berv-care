import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <svg
        width="39"
        height="59"
        viewBox="0 0 39 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="19.5" height="19.5" fill="#14532D" />
        <rect x="19.5" y="19.5" width="19.5" height="19.5" fill="#FBBF24" />
        <rect y="39" width="19.5" height="19.5" fill="#14532D" />
      </svg>
    </div>
  );
}
