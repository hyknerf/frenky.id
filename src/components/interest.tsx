import * as React from "react";
import SectionHeading from "./section_heading";

export declare interface CurrentInterestProps {
  interests: Array<string>;
}

const CurrentInterest = (interests: CurrentInterestProps) => {
  const renderedInterests = interests.interests.map((item, index) => {
    return (
      <p key={index} className="my-6 leading-relaxed text-gray-300 text-md font-inter">
        {item}
      </p>
    );
  });
  return (
    <section className="min-h-full pb-32 2xl:px-20">
      <SectionHeading sectionNumber={3} text={"Things That Interest Me Right Now"}/>

      {renderedInterests}
    </section>
  );
};

export default CurrentInterest;
