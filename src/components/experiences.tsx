import { Tab } from "@headlessui/react";
import * as React from "react";
import { Experience } from "../types";
import Stacks from "./experience/dev_stacks";
import Duration from "./experience/duration";
import Title from "./experience/job_title";
import SectionHeading from "./section_heading";

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
              "text-left font-aglet px-4 py-2 hover:bg-midnight-700 hover:border-sun-500 hover:transition-all ease-in duration-300 border-l-2" +
              " " +
              (state.selected
                ? "bg-midnight-700  border-sun-500"
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
    const projects = item.projects.map((project) => {
      return (
        <li className="before:content-['▹'] before:absolute before:left-0 relative pl-8 mb-1 before:text-sun-500">
          {project}
        </li>
      );
    });
    return (
      <Tab.Panel className={"flex flex-col gap-y-1"}>
        <Title
          role={item.role}
          company={item.company}
          url={item.website}
        ></Title>
        <Duration
          start={item.duration.start}
          end={item.duration.end}
        ></Duration>
        <p className="max-w-2xl my-4 leading-loose font-haas">
          {item.description}
        </p>
        <ul className="relative flex flex-col max-w-lg my-4 font-light gap-y-2">{projects}</ul>
        <Stacks
          languages={item.devStacks.languages}
          technologies={item.devStacks.technologies}
          tools={item.devStacks.tools}
        ></Stacks>
      </Tab.Panel>
    );
  });

  return (
    <section className="min-h-full pb-32 2xl:mx-20">
      <SectionHeading sectionNumber={2} text={"I've Been Working With"} />

      <div className="flex flex-row gap-12 pt-4 text-gray-300 first:-mt-4">
        <Tab.Group vertical>
          <Tab.List className="flex flex-col basis-1/5">
            {experiencesTab}
          </Tab.List>
          <Tab.Panels className={"basis-4/5"}>{experiencesPanel}</Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Experiences;
