import * as React from "react";
import SectionHeading from "./section_heading";

const Contact = () => {
  return (
    <section className="flex flex-col justify-center pb-32">
      <span className="text-center">
        <SectionHeading sectionNumber={4} text={"Connect With Me"} />
      </span>
      <p className="text-md font-inter text-center leading-relaxed text-gray-300 xl:px-64">
        I'm currently looking for any new opportunities, and my inbox is always
        open. Whether you have a question or just want to say hi, I'll try my
        best to get back to you!
      </p>

      <div className="group mx-auto mt-24">
        <a
          className="font-inter border-sun-500 group-hover:bg-sun-500 rounded-lg border-2 px-4 py-3 transition-all ease-in hover:cursor-pointer group-hover:border-4 "
          href={"mailto:hello@frenky.id"}
        >
          <span className="font-jetbrains text-sun-500 text-xl transition-all ease-in group-hover:font-bold group-hover:text-white">
            Say Hello
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
