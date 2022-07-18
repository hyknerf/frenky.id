import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import SectionHeading from "./section_heading";

const About = () => {
  return (
    <section className="min-h-full pb-32 2xl:px-20">
      <SectionHeading sectionNumber={1} text={"About Me"} />
      <div className="flex flex-col gap-10 mx-auto my-6 md:flex-row">
        <div className="md:basis-2/6 lg:basis-1/5">
          <div className="w-40 mx-auto overflow-hidden rounded-full isolate ring-4 ring-gray-300">
            <StaticImage
              src={"../images/avatar.jpeg"}
              alt="frenky"
              width={400}
            ></StaticImage>
          </div>
        </div>
        <div className="flex flex-col md:basis-4/6 lg:basis-4/5 gap-y-6">
          <p className="leading-loose text-gray-300 text-md font-haas">
            Since I'm a middle-schooler I always love computers. Computers weren't widely available at that time so I had to go to computer rental shops just to play with the good-old MS Word. I love printing some WordArt craft back then. During high-school time, I was lucky enough that my school build their first computer labs. I just had to take that opportunity and more often than not, I stayed all night long in the labs. That's when I was exposed to the World Wide Web. I thought to myself, I want to build websites.
          </p>
          <p className="leading-loose text-gray-300 text-md font-haas">
            I got my major in Information Technology from Maranatha Christian University in Bandung. Looking for job as fresh graduate was never an easy feat. But after decided Bandung was not where I could get the best experience on this field, I moved to Jakarta as I got offer as Web Developer role at Tokopedia. And the rest is history.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
