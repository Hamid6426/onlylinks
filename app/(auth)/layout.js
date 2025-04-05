import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <div className="py-12">{children}</div>
    </div>
  );
}
