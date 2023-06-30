import Image from "next/image";
import { useState } from "react";

type Props = {
  value?: string;
  id?: string;
  dataTestId?: string;
  onchange?: (x: any) => void;
  placeholder: string;
  type: string;
  className: string;
  name: string;
};

export default function CustomInput({
  type,
  value,
  name,
  dataTestId,
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
      data-testid={dataTestId}
      onChange={onchange}
      placeholder={placeholder}
      className={className}
      name={name}
      required
    />
  );
}
