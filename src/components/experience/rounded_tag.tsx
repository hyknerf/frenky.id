import * as React from "react";

export declare interface TagsProp {
  texts: Array<string>;
}

const RoundedTags = (tags: TagsProp) => {
  const renderedTags = tags.texts.map((item) => {
    return (
      <li key={item} className="text-xs font-bold py-[3px] font-jetbrains text-sun-500 hover:text-white group px-2 border-[1px] border-sun-500 rounded-[3px] hover:bg-sun-500 hover:px-3 transition-all hover:cursor-default">
          {item}
      </li>
    );
  });

  return <ul className="flex flex-wrap gap-2">{renderedTags}</ul>;
};

export default RoundedTags;
