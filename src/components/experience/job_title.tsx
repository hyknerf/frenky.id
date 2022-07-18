import * as React from "react";

export declare interface Title {
  technologies: Array<string>;
}

export declare interface TitleProp {
  company: string;
  url: string;
  role: string;
}

const JobTitle = (props: TitleProp) => {
  return (
    <h4 className="flex text-xl font-archivo lg:text-2xl gap-x-2">
      <span>{props.role}</span>
      <span className="text-sun-500">@</span>
      <a
        className="font-semibold hover:underline hover:cursor-pointer text-sun-500"
        href={props.url}
        target={"_blank"}
      >
        {props.company}
      </a>
    </h4>
  );
};

export default JobTitle;
