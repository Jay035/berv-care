import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface InputProps {
  value?: string;
  id?: string;
  label?: string;
  style?: string;
  // dataTestId?: string;
  onChange?: (e: any) => void;
  placeholder: string;
  type: "text" | "number" | "email" | "password";
  className: string;
  name: string;
}

export default function CustomInput({
  type,
  value,
  name,
  label,
  style,
  // dataTestId,
  onChange,
  placeholder,
  className,
  id,
}: InputProps) {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange?.(e.target.value);
  // };
  return (
    <div className={style}>
      <label htmlFor={label} className="capitalize">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        // data-testid={dataTestId}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        name={name}
        required
      />
    </div>
  );
}
