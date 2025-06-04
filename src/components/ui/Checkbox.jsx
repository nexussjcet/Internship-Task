// components/ui/Checkbox.jsx
import React from "react";

export function Checkbox({ checked, onCheckedChange }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    />
  );
}
