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
  const experiencesTab = props.experiences.map((expItem, expIdx) => {
    return (
      <Tab key={expIdx}>
        {(state) => (
          <div
            className={
              "text-left font-jetbrains px-4 py-2 hover:bg-midnight-700 hover:border-sun-500 hover:transition-all ease-in duration-300 border-b-2 lg:border-l-2 lg:border-b-0" +
              " " +
              (state.selected
                ? "bg-midnight-700  border-sun-500"
                : "bg-transparent border-midnight-800")
            }
          >
            {expItem.company}
          </div>
        )}
      </Tab>
    );
  });

  const experiencesPanel = props.experiences.map((expItem, expIndex) => {
    const projects = expItem.projects.map((projectItem, projectIndex) => {
      return (
        <li
          key={projectIndex}
          className="before:content-['▹'] before:absolute before:left-0 relative pl-8 mb-1 before:text-sun-500"
        >
          {projectItem}
        </li>
      );
    });
    return (
      <Tab.Panel className={"flex flex-col gap-y-1"} key={expIndex}>
        <Title
          role={expItem.role}
          company={expItem.company}
          url={expItem.website}
        ></Title>
        <Duration
          start={expItem.duration.start}
          end={expItem.duration.end}
        ></Duration>
        <p className="max-w-2xl my-4 leading-relaxed font-inter">
          {expItem.description}
        </p>
        <ul className="relative flex flex-col max-w-lg my-4 gap-y-2 font-inter">
          {projects}
        </ul>
        <Stacks
          languages={expItem.devStacks.languages}
          technologies={expItem.devStacks.technologies}
          tools={expItem.devStacks.tools}
        ></Stacks>
      </Tab.Panel>
    );
  });

  return (
    <section className="min-h-full pb-32 2xl:mx-20">
      <SectionHeading sectionNumber={2} text={"I've Been Working With"} />

      <div className="flex flex-col gap-12 pt-4 text-gray-300 first:-mt-4 lg:flex-row">
        <Tab.Group vertical>
          <Tab.List className="flex flex-row pb-2 overflow-auto basis-1/5 lg:flex-col flex-nowrap">
            {experiencesTab}
          </Tab.List>
          <Tab.Panels className={"basis-4/5"}>{experiencesPanel}</Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Experiences;
