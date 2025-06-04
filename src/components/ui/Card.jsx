// components/ui/Card.jsx
import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={
        "bg-white rounded-md shadow-md border border-gray-200 " + className
      }
    >
      {children}
    </div>
  );
}
