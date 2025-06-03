import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white p-4 rounded shadow">{children}</div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
