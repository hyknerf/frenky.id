import * as React from "react";
import { Experience } from "../../types";
import Tags from "../tag";
import Duration from "./duration";
import Title from "./title";

export declare interface ExperiencesProp {
  experiences: Array<Experience>;
}

const Experiences = (props: ExperiencesProp) => {
  const experiences = props.experiences.map((item) => {
    return (
      <div className="flex-col mt-2">
        <h3>
          <Title
            role={item.role}
            company={item.company}
            url={item.website}
          ></Title>
        </h3>
        <Duration
          start={item.duration.start}
          end={item.duration.end}
        ></Duration>
        {item.languages.length > 0 && (
          <div className="flex">
            Languages: <Tags texts={item.languages}></Tags>
          </div>
        )}
        <div className="flex">
          Technologies: <Tags texts={item.technologies}></Tags>
        </div>
        {item.tools.length > 0 && (
          <div className="flex">
            Tools:
            <Tags texts={item.tools}></Tags>
          </div>
        )}
      </div>
    );
  });

  return (
    <section className="2xl:mx-20">
      <h2 className="text-2xl font-extrabold font-['paralucent'] before:content-['02.'] before:font-mono before:mr-2 text-gray-300 before:text-sun-500 before:text-xl text-sun before:bottom-2">
        I've Been Working With
      </h2>
      <div className="flex flex-col gap-6 pt-4 pb-20 text-gray-300 first:-mt-4">{experiences}</div>
    </section>
  );
};

export default Experiences;
