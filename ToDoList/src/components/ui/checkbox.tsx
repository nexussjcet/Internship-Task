import React from "react";

export function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      {...props}
      className={`h-5 w-5 accent-blue-600 ${props.className}`}
    />
  );
}
