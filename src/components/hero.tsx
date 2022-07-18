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
      <div className="text-lg leading-relaxed font-jetbrains text-sun-500">Hello, my name is</div>
      <div className="mt-10 text-5xl font-extrabold leading-snug md:text-6xl font-archivo text-sun-500 md:mt-5 lg:text-7xl">
        {hero.name}.
      </div>
      <div className="mt-5 text-4xl font-thin leading-snug md:text-5xl font-archivo text-sun-500 lg:text-6xl">
        {hero.tagline}
      </div>
      <p className="max-w-xl mt-16 leading-relaxed text-gray-300 text-md font-inter">
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
