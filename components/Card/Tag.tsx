import React from "react";

type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  return (
    <div className="my-auto rounded-sm border border-white p-1 text-xs font-bold print:border-black">
      {text}
    </div>
  );
};

export default Tag;
