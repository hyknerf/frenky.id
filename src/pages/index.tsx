import { Tab } from "@headlessui/react";
import * as React from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Credit from "../components/credit";
import Experiences from "../components/experience/list";
import Hero from "../components/hero";
import CurrentInterest from "../components/interest";
import { SiteConfig } from "../types";
import { Helmet } from "react-helmet";
import { Script } from "gatsby";

const config: SiteConfig = {
  name: "Frenky Harry",
  title: "Frenky Harry | Software Engineer",
  tagline: "I build software that matters.",
  description:
    "Enthusiastic Software Engineer with 6+ years broad experience in Backend Development, Microservice Architecture, Event-Driven Development areas with willingness to master new technologies that are relevant to provide solution around Financial Technology.",
  socialLinks: {
    github: "https://github.com/hyknerf",
    twitter: "https://twitter.com/hyknerf",
    linkedin: "https://linkedin.com/u/frenkyharry",
    instagram: "https://instagram.com/frenkyharry",
  },
  currentInterest: [
    "Web3 is one of recent phenomenon that caught my attention. It is stunning how fast things moving in blockchain world, adoption and technologies are one of many aspect that moving rapidly. Enthusiast claim that this is the future, but I've yet to be convinced by that. But learning something new will never hurt.",
    "Other things that currently I like to do is learning the fundamentals. I got my bachelor degree in Information Technolgy, so I don't have that deep understanding of computers compared to others from Computer Science school. It's fascinating to learn what's behind the technologies that I use on daily basis professionally.",
  ],
  experiences: [
    {
      company: "GoPay",
      website: "https://gopay.co.id",
      role: "Web Developer",
      duration: {
        start: "February 2017",
        end: "Present",
      },
      description: "Working on various project within the payment system such as integrating with notable third-party such as Google, and to keep GoPay compliance with regulation by implementing QR Code Indonesian Standard. During the last 2 years, focus on GoBills - GoPay solution for bills payment.",
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
    {
      company: "Gojek",
      website: "https://gojek.com",
      role: "Web Developer",
      duration: {
        start: "Jan 2015",
        end: "Jan 2017",
      },
      description: "Gojek",
      languages: ["Java"],
      technologies: ["Node.js", "Docker", "Kubernetes"],
      tools: ["MySQL", "Git"],
    },
    {
      company: "Tokopedia",
      website: "https://tokopedia.com",
      role: "Web Developer",
      duration: {
        start: "January 2015",
        end: "January 2017",
      },
      description: "Working with rapidly growing team from 4 people to 10+ people. The team responsible to protect user account credentials and improve login security.",
      languages: ["Perl", "Go"],
      technologies: ["MySQL", "Redis"],
      tools: ["Git", "Jira", "Jenkins"],
    },
  ],
};

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>{config.title}</title>
      </Helmet>
      <div className="text-white bg-midnight-900">
        <div className="container px-10 mx-auto pt-52 2xl:px-64 xl:px-40 md:px-20 sm:px-14">
          <Hero
            name={config.name}
            tagline={config.tagline}
            description={config.description}
            social={config.socialLinks}
          ></Hero>
          <About></About>
          <Experiences experiences={config.experiences}></Experiences>
          <CurrentInterest interests={config.currentInterest}></CurrentInterest>
          <Contact></Contact>
          <Credit></Credit>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
