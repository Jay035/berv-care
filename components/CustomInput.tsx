import Image from "next/image";
import { useState } from "react";

type Props = {
  value?: string;
  id?: string;
  onchange: (x: any) => void;
  placeholder: string;
  type: string;
  className: string;
  name: string;
};

export default function CustomInput({
  type,
  value,
  name,
  onchange,
  placeholder,
  className,
  id,
}: Props) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onchange}
      placeholder={placeholder}
      className={className}
      name={name}
      // autoComplete="off"
      required
    />
  );
}
