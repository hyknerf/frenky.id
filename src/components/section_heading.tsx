import * as React from "react";

export declare interface SectionHeadingProps {
  sectionNumber: number;
  text: string;
}

const SectionHeading = (props: SectionHeadingProps) => {
  return (
    <h2 data-section={props.sectionNumber}
      className={
        "text-3xl font-semibold font-archivo before:font-jetbrains before:mr-2 text-gray-300 before:text-sun-500 before:text-2xl mb-10 before:section-header before:content-['0'attr(data-section)'.']"
      }
    >
      {props.text}
    </h2>
  );
};

export default SectionHeading;
