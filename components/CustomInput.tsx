import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface InputProps {
  value?: string;
  id?: string;
  // dataTestId?: string;
  onChange?: (e: string) => void;
  placeholder: string;
  type: "text" | "number" | "email" | "password";
  className: string;
  name: string;
}

export default function CustomInput({
  type,
  value,
  name,
  // dataTestId,
  onChange,
  placeholder,
  className,
  id,
}: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <input
      id={id}
      type={type}
      value={value}
      // data-testid={dataTestId}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
      name={name}
      required
    />
  );
}
