import * as React from "react";
import RoundedTags from "./stack";

export declare interface Title {
  technologies: Array<string>;
}

export declare interface TitleProp {
  company: string;
  url: string;
  role: string;
}

const Title = (props: TitleProp) => {
  return (
    <>
      <div className="flex font-['paralucent'] text-2xl gap-x-2">
        <a>{props.role}</a>
        <a className="font-bold text-sun-500">@</a>
        <a
          className="font-bold hover:underline hover:cursor-pointer text-sun-500"
          href={props.url}
          target={"_blank"}
        >
          {props.company}
        </a>
      </div>
    </>
  );
};

export default Title;
