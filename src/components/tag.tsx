import * as React from "react";

export declare interface TagsProp {
  texts: Array<string>;
}

const Tags = (props: TagsProp) => {
  const tags = props.texts.map((item) => {
    return (
      <li className="px-1 py-[2px] m-1  border-[1px] border-white text-white rounded-[3px]">
        <pre className="text-xs font-bold">{item}</pre>
      </li>
    );
  });

  return (
    <>
      <ul className="flex">{tags}</ul>
    </>
  );
};

export default Tags;
