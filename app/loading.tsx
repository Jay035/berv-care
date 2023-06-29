import Image from "next/image";


export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <Image
        className="w-7 animate-pulse"
        src="/logo.svg"
        width={48}
        height={48}
        alt="logo"
      />
    </div>
  );
}
