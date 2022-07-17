import * as React from "react";

export declare interface SectionHeadingProps {
  sectionNumber: number;
  text: string;
}

const SectionHeading = (props: SectionHeadingProps) => {
  const sectionBefore = "before:content-['0" + props.sectionNumber + ".']";
  return (
    <h2
      className={
        "text-3xl font-extrabold font-['paralucent'] before:font-aglet before:mr-2 text-gray-300 before:text-sun-500 before:text-2xl text-sun mb-10 " +
        sectionBefore
      }
    >
      {props.text}
    </h2>
  );
};

export default SectionHeading;
