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
      <div className="flex font-['paralucent'] text-2xl">
        <a>{props.role}</a>
        <div className="ml-1">
          <a className="mr-1 font-bold text-sun-500">@</a>
          <a className="font-bold hover:underline hover:cursor-pointer text-sun-500" href={props.url} target={"_blank"}>{props.company}</a>
        </div>
      </div>
    </>
  );
};

export default Title;
