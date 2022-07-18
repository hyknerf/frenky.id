import * as React from "react";
import { SocialLinks } from "../types";
import SocialLinksIcon from "./social";

export declare interface HeroProps {
  name: string;
  tagline: string;
  description: string;
  social: SocialLinks;
}

const Hero = (hero: HeroProps) => {
  return (
    <section className="flex-row min-h-screen py-2">
      <div className="text-lg leading-loose font-aglet text-sun-500">Hello, my name is</div>
      <div className="leading-snug text-5xl md:text-6xl font-bold font-['paralucent'] text-sun-500 mt-10 md:mt-5 lg:text-7xl">
        {hero.name}.
      </div>
      <div className="leading-snug text-4xl md:text-5xl font-medium font-['paralucent'] text-sun-500 mt-5 lg:text-6xl">
        {hero.tagline}
      </div>
      <p className="max-w-xl mt-16 leading-loose text-gray-300 text-md font-haas">
        {hero.description}
      </p>
      <SocialLinksIcon
        github={hero.social.github}
        twitter={hero.social.twitter}
        linkedin={hero.social.linkedin}
        instagram={hero.social.instagram}
        hashnode={hero.social.hashnode}
      ></SocialLinksIcon>
    </section>
  );
};

export default Hero;
