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
              "font-jetbrains hover:bg-midnight-700 hover:border-sun-500 border-b-2 px-4 py-2 text-left duration-300 ease-in hover:transition-all lg:border-b-0 lg:border-l-2" +
              " " +
              (state.selected
                ? "bg-midnight-700  border-sun-500"
                : "border-midnight-800 bg-transparent")
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
          className="before:text-sun-500 relative mb-1 pl-8 before:absolute before:left-0 before:content-['▹']"
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
        <p className="font-inter my-4 max-w-2xl leading-relaxed">
          {expItem.description}
        </p>
        <ul className="font-inter relative my-4 flex max-w-lg flex-col gap-y-2">
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
          <Tab.List className="flex basis-1/5 flex-row flex-nowrap overflow-auto pb-2 lg:flex-col">
            {experiencesTab}
          </Tab.List>
          <Tab.Panels className={"basis-4/5"}>{experiencesPanel}</Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Experiences;
