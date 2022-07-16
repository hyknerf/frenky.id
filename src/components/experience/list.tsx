import { faCentercode, faMicroblog } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faMicrochip,
  faScrewdriver,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <p className="max-w-2xl">
          Sed imperdiet faucibus pretium. Nam porttitor purus volutpat odio
          ornare rutrum ut eu arcu. Aliquam malesuada nulla sed quam hendrerit,
          id tempor magna fringilla.
        </p>
        <div className="flex flex-col mt-4 gap-y-4">
          {item.languages.length > 0 && (
            <div className="">
              <p className="mb-2 font-mono text-sm">
                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                <span className="ml-2">Languages</span>
              </p>
              <Tags texts={item.languages}></Tags>
            </div>
          )}
          <div className="">
            <p className="mb-2 font-mono text-sm">
              <FontAwesomeIcon icon={faMicrochip}></FontAwesomeIcon>
              <span className="ml-2">Technologies</span>
            </p>
            <Tags texts={item.technologies}></Tags>
          </div>
          {item.tools.length > 0 && (
            <div className="">
              <p className="mb-2 font-mono text-sm">
                <FontAwesomeIcon icon={faScrewdriverWrench}></FontAwesomeIcon>
                <span className="ml-2">Tools</span>
              </p>
              <Tags texts={item.tools}></Tags>
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <section className="mb-20 2xl:mx-20">
      <h2 className="text-3xl font-extrabold font-['paralucent'] before:content-['02.'] before:font-mono before:mr-2 text-gray-300 before:text-sun-500 before:text-2xl text-sun">
        I've Been Working With
      </h2>
      <div className="flex flex-col gap-12 pt-4 pb-20 text-gray-300 first:-mt-4">
        {experiences}
      </div>
    </section>
  );
};

export default Experiences;
