import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin, faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { SocialLinks } from "../types";

const SocialLinksIcon = (socialLinks: SocialLinks) => {
  return (
    <section className="flex py-20 text-4xl gap-x-2 text-sun-500">
      <a href={socialLinks.github} target={"_blank"} referrerPolicy={"no-referrer"}>
        <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
      </a>
      <a
        href={socialLinks.linkedin}
        target={"_blank"}
        referrerPolicy={"no-referrer"}
      >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      <a
        href={socialLinks.instagram}
        target={"_blank"}
        referrerPolicy={"no-referrer"}
      >
        <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
      </a>
      <a href={socialLinks.twitter} target={"_blank"} referrerPolicy={"no-referrer"}>
        <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
      </a>
    </section>
  );
};

export default SocialLinksIcon;
