import * as React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col justify-center pb-20">
      <h2 className="text-3xl font-extrabold font-['paralucent'] before:content-['04.'] before:font-mono before:mr-2 text-gray-300 before:text-sun-500 before:text-2xl text-center text-sun before:bottom-2">
        Connect With Me
      </h2>
      <p className="my-6 leading-relaxed text-center text-gray-300 text-md 2xl:px-64">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>

      <div className="mx-auto mt-10 group">
        <a
          className="p-4 transition-all ease-in border-2 rounded-lg eas group-hover:border-4 border-sun-500 hover:cursor-pointer group-hover:bg-midnight-800"
          href={"mailto:hello@frenky.id"}
        >
          <span className="font-mono text-xl transition-all ease-in text-sun-500 group-hover:font-bold">
            Say Hello 👋
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
