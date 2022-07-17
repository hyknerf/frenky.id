import * as React from "react";
import SectionHeading from "./section_heading";

const Contact = () => {
  return (
    <section className="flex flex-col justify-center pb-32">
      <span className="text-center">
        <SectionHeading sectionNumber={4} text={"Connect With Me"} />
      </span>
      <p className="leading-loose text-center text-gray-300 text-md xl:px-64">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>

      <div className="mx-auto mt-24 group">
        <a
          className="px-4 py-3 transition-all ease-in border-2 rounded-lg font-haas group-hover:border-4 border-sun-500 hover:cursor-pointer group-hover:bg-sun-500 "
          href={"mailto:hello@frenky.id"}
        >
          <span className="text-xl transition-all ease-in font-aglet text-sun-500 group-hover:font-bold group-hover:text-white">
            Say Hello 👋
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
