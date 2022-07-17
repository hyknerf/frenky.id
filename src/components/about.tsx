import * as React from "react";

const About = () => {
  return (
    <section className="min-h-full pb-20 2xl:px-20">
      <h2 className="text-3xl font-extrabold font-['paralucent'] before:content-['01.'] before:font-mono before:mr-2 text-gray-300 before:text-sun-500 before:text-2xl text-sun before:bottom-2">
        About Me
      </h2>
      <p className="my-6 leading-relaxed text-gray-300 text-md">
        Sed imperdiet faucibus pretium. Nam porttitor purus volutpat odio ornare
        rutrum ut eu arcu. Aliquam malesuada nulla sed quam hendrerit, id tempor
        magna fringilla. Etiam tincidunt eros vitae vestibulum interdum.
        Curabitur vestibulum, lectus ac dignissim faucibus, velit dolor
        dignissim diam, id malesuada justo tortor et justo. Vivamus ullamcorper
        lorem id.
      </p>
    </section>
  );
};

export default About;
