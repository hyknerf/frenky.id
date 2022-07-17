import { faCentercode, faMicroblog } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faMicrochip,
  faScrewdriver,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "@headlessui/react";
import * as React from "react";
import { Experience } from "../../types";
import RoundedTags from "./stack";
import Duration from "./duration";
import Title from "./title";

export declare interface ExperiencesProp {
  experiences: Array<Experience>;
}

const Experiences = (props: ExperiencesProp) => {
  const experiencesTab = props.experiences.map((item) => {
    return (
      <Tab>
        {(state) => (
          <div
            className={
              "text-left font-mono px-4 py-2 hover:bg-midnight-700 hover:transition-all ease-in duration-300 border-l-2" +
              " " +
              (state.selected
                ? "bg-midnight-700  border-midnight-200"
                : "bg-transparent border-midnight-800")
            }
          >
            {item.company}
          </div>
        )}
      </Tab>
    );
  });

  const experiencesPanel = props.experiences.map((item) => {
    return (
      <Tab.Panel>
        <div className="flex-col">
          <h3>
            <Title
              role={item.role}
              company={item.company}
              url={item.website}
            ></Title>
          </h3>
          <div className="font-mono">
            <Duration
              start={item.duration.start}
              end={item.duration.end}
            ></Duration>
          </div>
          <p className="max-w-2xl">
            {item.description}
          </p>
          <div className="flex flex-col mt-4 gap-y-4">
            {item.languages.length > 0 && (
              <div className="">
                <p className="mb-2 font-mono text-sm">
                  <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                  <span className="ml-2">Languages</span>
                </p>
                <RoundedTags texts={item.languages}></RoundedTags>
              </div>
            )}
            <div className="">
              <p className="mb-2 font-mono text-sm">
                <FontAwesomeIcon icon={faMicrochip}></FontAwesomeIcon>
                <span className="ml-2">Technologies</span>
              </p>
              <RoundedTags texts={item.technologies}></RoundedTags>
            </div>
            {item.tools.length > 0 && (
              <div className="">
                <p className="mb-2 font-mono text-sm">
                  <FontAwesomeIcon icon={faScrewdriverWrench}></FontAwesomeIcon>
                  <span className="ml-2">Tools</span>
                </p>
                <RoundedTags texts={item.tools}></RoundedTags>
              </div>
            )}
          </div>
        </div>
      </Tab.Panel>
    );
  });

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  return (
    <section className="min-h-full mb-20 2xl:mx-20">
      <h2 className="text-3xl font-extrabold font-['paralucent'] before:content-['02.'] before:font-mono before:mr-2 text-gray-300 before:text-sun-500 before:text-2xl text-sun">
        I've Been Working With
      </h2>
      {/* <div className="flex flex-col gap-12 pt-4 pb-20 text-gray-300 first:-mt-4">
        {experiences}
      </div> */}

      <div className="flex flex-row gap-12 pt-4 pb-20 text-gray-300 first:-mt-4">
        <Tab.Group
          vertical
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className="flex flex-col basis-1/5">{experiencesTab}</Tab.List>
          <Tab.Panels className={"basis-4/5"}>{experiencesPanel}</Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Experiences;
