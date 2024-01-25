import React, { ReactNode } from "react";
import Meta from "./Meta";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0c0a09] ">
      <Meta />
      {children}
    </div>
  );
}
