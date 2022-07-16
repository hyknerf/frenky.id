import {
  faGithub,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

const Social = () => {
  return (
    <section className="flex py-20 text-4xl gap-x-2 text-sun-500">
      <a href="">
        <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
      </a>
      <a href="">
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      <a href="">
        <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
      </a>
      <a href="">
        <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
      </a>
    </section>
  );
};

export default Social;
