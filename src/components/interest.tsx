import * as React from "react";
import RoundedTags from "./experience/rounded_tag";
import SectionHeading from "./section_heading";

export declare interface CurrentInterestProps {
  interests: Array<string>;
}

const CurrentInterest = (interests: CurrentInterestProps) => {
  const renderedInterests = interests.interests.map((item) => {
    return (
      <p className="my-6 leading-loose text-gray-300 text-md font-haas">
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
