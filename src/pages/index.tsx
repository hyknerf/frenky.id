import * as React from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Credit from "../components/credit";
import Experiences from "../components/experience/list";
import Hero from "../components/hero";
import Interest from "../components/interest";
import { SiteConfig } from "../types";

const config: SiteConfig = {
  name: "Frenky Harry",
  title: "Frenky Harry Software Engineer Portfolio",
  experiences: [
    {
      company: "Tokopedia",
      website: "https://tokopedia.com",
      role: "Web Developer",
      duration: {
        start: "Jan 2015",
        end: "Jan 2017",
      },
      languages: ["Perl", "Go"],
      technologies: ["Git", "Node.js", "Docker", "Kubernetes"],
      tools: [],
    },
    {
      company: "Gojek",
      website: "https://gojek.com",
      role: "Web Developer",
      duration: {
        start: "Jan 2015",
        end: "Jan 2017",
      },
      languages: ["Java"],
      technologies: ["Node.js", "Docker", "Kubernetes"],
      tools: ["MySQL", "Git"],
    },
    {
      company: "GoPay",
      website: "https://gopay.co.id",
      role: "Web Developer",
      duration: {
        start: "Jan 2015",
        end: "present",
      },
      languages: ["Java", "Go"],
      technologies: [
        "Envoy",
        "PostgreSQL",
        "Docker",
        "Gitlab CI/CD",
        "Terraform",
        "mTLS",
      ],
      tools: ["ElasticSearch", "Amazon Web Service", "Google Cloud Platform"],
    },
  ],
};

// markup
const IndexPage = () => {
  return (
    <div className="text-white bg-midnight-900">
      <div className="container px-10 mx-auto pt-52 2xl:px-64 xl:px-40 md:px-20 sm:px-14">
        <Hero></Hero>
        <About></About>
        <Experiences experiences={config.experiences}></Experiences>
        <Interest></Interest>
        <Contact></Contact>
        <Credit></Credit>
      </div>
    </div>
  );
};

export default IndexPage;
