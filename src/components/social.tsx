import {
  faGithub,
  faHashnode,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { SocialLinks } from "../types";

const SocialLinksIcon = (socialLinks: SocialLinks) => {
  return (
    <section className="flex py-20 text-4xl gap-x-2 text-sun-500">
      <a
        href={socialLinks.github}
        target={"_blank"}
        referrerPolicy={"no-referrer"}
      >
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </a>
      <a
        href={socialLinks.hashnode}
        target={"_blank"}
        referrerPolicy={"no-referrer"}
      >
        <FontAwesomeIcon icon={faHashnode}></FontAwesomeIcon>
      </a>
      <a
        href={socialLinks.linkedin}
        target={"_blank"}
        referrerPolicy={"no-referrer"}
      >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      <a
        href={socialLinks.twitter}
        target={"_blank"}
        referrerPolicy={"no-referrer"}
      >
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
      </a>
      <a
        href={socialLinks.instagram}
        target={"_blank"}
        referrerPolicy={"no-referrer"}
      >
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
      </a>
    </section>
  );
};

export default SocialLinksIcon;
