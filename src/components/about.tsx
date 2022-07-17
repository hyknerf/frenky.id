import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import SectionHeading from "./section_heading";

const About = () => {
  return (
    <section className="min-h-full pb-32 2xl:px-20">
      <SectionHeading sectionNumber={1} text={"About Me"}/>
      <div className="flex gap-10 my-6 lg:flex-row md:flex-col">
        <div className="basis-1/5">
          <StaticImage
            className="w-auto border-4 border-gray-300 rounded-full"
            src={"../images/avatar.jpeg"}
            alt="frenky"
            width={400}
          ></StaticImage>
        </div>
        <div className="basis-4/5">
        <p className="leading-loose text-gray-300 text-md font-haas">
          Sed imperdiet faucibus pretium. Nam porttitor purus volutpat odio
          ornare rutrum ut eu arcu. Aliquam malesuada nulla sed quam hendrerit,
          id tempor magna fringilla. Etiam tincidunt eros vitae vestibulum
          interdum. Curabitur vestibulum, lectus ac dignissim faucibus, velit
          dolor dignissim diam, id malesuada justo tortor et justo. Vivamus
          ullamcorper lorem id.
        </p>
        </div>
      </div>
    </section>
  );
};

export default About;
