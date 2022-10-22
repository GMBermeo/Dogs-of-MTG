import React from "react";

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="rounded-sm border border-white p-1 text-xs font-bold print:border-black">
      {text}
    </div>
  );
};

export default Tag;
