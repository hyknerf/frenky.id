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
      <div className="text-lg font-aglet text-sun-500">Hello, my name is</div>
      <div className="mt-3 text-7xl font-bold font-['paralucent'] text-sun-500">
        {hero.name}.
      </div>
      <div className="mt-3 text-6xl font-medium font-['paralucent'] text-sun-500">
        {hero.tagline}
      </div>
      <p className="max-w-xl mt-10 leading-relaxed text-gray-300 text-md font-haas">
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
