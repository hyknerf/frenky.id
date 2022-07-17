import * as React from "react";

export declare interface TagsProp {
  texts: Array<string>;
}

const RoundedTags = (tags: TagsProp) => {
  const renderedTags = tags.texts.map((item) => {
    return (
      <li className="group px-2 py-[2px] border-[1px] border-sun-500 text-white rounded-[3px] hover:bg-sun-500 hover:px-3 transition-all hover:cursor-default">
        <pre className="text-xs font-bold text-sun-500 group-hover:text-white">
          {item}
        </pre>
      </li>
    );
  });

  return <ul className="flex flex-wrap gap-2">{renderedTags}</ul>;
};

export default RoundedTags;
