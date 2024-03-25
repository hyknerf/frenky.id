import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import SectionHeading from "./section_heading";

const About = () => {
  return (
    <section className="min-h-full pb-32 2xl:px-20">
      <SectionHeading sectionNumber={1} text={"About Me"} />
      <div className="mx-auto my-6 flex flex-col gap-10 md:flex-row md:justify-start">
        <div className="md:basis-2/6 lg:basis-2/5">
          <div className="mx-auto w-auto">
            <StaticImage
              src={"../images/avatar.png"}
              alt="Frenky Harry by Niko Wiratma"
              title="Frenky Harry by Niko Wiratma"
              width={512}
            ></StaticImage>
            <p className="text-center text-xs text-gray-300">
              Illustration by{" "}
              <a
                className="hover:text-sun-500 font-bold hover:underline"
                href={"https://www.instagram.com/niko.wiratma/"}
                target={"_blank"}
              >
                Niko Wiratma
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 md:basis-4/6 lg:basis-4/5">
          <p className="text-md font-inter leading-relaxed text-gray-300">
            Since I'm a middle-schooler I always love computers. Computers
            weren't widely available at that time so I had to go to computer
            rental shops just to play with the good-old MS Word. I love printing
            some WordArt craft back then. During high-school time, I was lucky
            enough that my school build their first computer labs. I just had to
            take that opportunity and more often than not, I stayed all night
            long in the labs. That's when I was exposed to the World Wide Web. I
            thought to myself, I want to build websites.
          </p>
          <p className="text-md font-inter leading-relaxed text-gray-300">
            I got my major in Information Technology from Maranatha Christian
            University in Bandung. Looking for job as fresh graduate was never
            an easy feat. But after decided Bandung was not where I could get
            the best experience on this field, I moved to Jakarta as I got offer
            as Web Developer role at Tokopedia. And the rest is history.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
