// components/ui/Button.jsx
import React from "react";

export function Button({ children, variant = "default", size = "md", className = "", ...props }) {
  let baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  let variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    ghost: "bg-transparent hover:bg-gray-200 focus:ring-gray-300 text-gray-700",
  };

  let sizes = {
    md: "px-4 py-2 text-sm",
    icon: "p-2",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
