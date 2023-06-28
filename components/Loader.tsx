import Image from "next/image";

type Props = {};

export default function Loader({}: Props) {
  return (
    <div className="flex items-center justify-center">
      <Image
        className="w-7 animate-pulse"
        src="/logo.svg"
        width={28}
        height={28}
        alt="logo"
      />
    </div>
  );
}
