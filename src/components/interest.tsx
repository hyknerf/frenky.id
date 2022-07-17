import * as React from "react";
import RoundedTags from "./experience/stack";

export declare interface CurrentInterestProps {
  interests: Array<string>;
}

const CurrentInterest = (interests: CurrentInterestProps) => {
  const renderedInterests = interests.interests.map((item) => {
    return (
      <p className="max-w-2xl my-6 leading-relaxed text-gray-300 text-md font-haas">
        {item}
      </p>
    );
  });
  return (
    <section className="min-h-full pb-20 2xl:px-20">
      <h2 className="text-3xl font-extrabold font-['paralucent'] before:content-['03.'] before:font-aglet before:mr-2 text-gray-300 before:text-sun-500 before:text-2xl text-sun before:bottom-2">
        Things That Interest Me Right Now
      </h2>

      {renderedInterests}
    </section>
  );
};

export default CurrentInterest;
