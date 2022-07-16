import * as React from "react";

export declare interface TagsProp {
  texts: Array<string>;
}

const Tags = (props: TagsProp) => {
  const tags = props.texts.map((item) => {
    return (
      <li className="group px-1 py-[2px] border-[1px] border-sun-500 text-white rounded-[3px] hover:bg-sun-500 hover:px-4 transition-all hover:cursor-none">
        <pre className="text-xs font-bold text-sun-500 group-hover:text-gray-300">{item}</pre>
      </li>
    );
  });

  return <ul className="flex flex-wrap gap-2">{tags}</ul>;
};

export default Tags;
