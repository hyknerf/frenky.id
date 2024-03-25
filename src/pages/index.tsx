import "@fontsource/archivo/100.css";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
import "@fontsource/inter/300.css";
import "@fontsource/jetbrains-mono/300.css";
import "@fontsource/jetbrains-mono/700.css";
import * as React from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Credit from "../components/credit";
import Experiences from "../components/experiences";
import SEO from "../components/helmet";
import Hero from "../components/hero";
import CurrentInterest from "../components/interest";
import svg from "../images/22.svg";
import { SiteConfig } from "../types";

const config: SiteConfig = {
  name: "Frenky Harry",
  title: "Frenky Harry | Software Engineer",
  tagline: "I build software that matters.",
  description:
    "Seasoned Software Engineer with over 9 years of experience, spanning from 2015 to the present, specializing in Ecommerce, Financial Technology, and Crypto Exchanges. Recognized for expertise in utilizing cutting-edge technologies to develop robust solutions and optimize business processes. Proficient in architecting scalable microservices architectures and implementing Agile Software Development Life Cycle (SDLC) methodologies. A collaborative team player with a passion for staying updated with the latest industry trends and technologies. Excels in effectively communicating technical concepts to diverse stakeholders, driving project success and achieving organizational goals.",
  socialLinks: {
    github: "https://github.com/syknerf",
    twitter: "https://twitter.com/syknerf",
    linkedin: "https://linkedin.com/in/frenkyharry",
    instagram: "https://instagram.com/frenkyharry",
    hashnode: "https://blog.frenky.id",
  },
  currentInterest: [
    "Web3 is one of recent phenomenon that caught my attention. It is stunning how fast things moving in blockchain world, adoption and technologies are one of many aspect that moving rapidly. Enthusiast claim that this is the future, but I've yet to be convinced by that. But learning something new will never hurt.",
    "Other things that currently I like to do is learning the fundamentals. I got my bachelor degree in Information Technolgy, so I don't have that deep understanding of computers compared to others from Computer Science school. It's fascinating to learn what's behind the technologies that I use on daily basis professionally.",
  ],
  experiences: [
    {
      company: "Pintu",
      website: "https://pintu.co.id",
      role: "Senior Software Developer Engineer",
      duration: {
        start: "August 2022",
        end: "April 2024",
      },
      description:
        "We are building the #1 cryptocurrency bank for everyone to accelerate the transition to an open financial system",
      devStacks: {
        languages: ["Go", "NodeJS", "NestJS"],
        technologies: ["Redis", "PostgreSQL", "Protocol Buffer", "gRPC"],
        tools: ["Github Workflow", "Jira", "Notion"],
      },
      projects: [
        "Maintain and enhance third-party exchange report on internal tools dashboard, ensuring accuracy and timeliness of data.",
        "Assist in planning, kickoff, design and development phases of internal exchange system, contributing insights and expertise to ensure effective implementation.",
        "Troubleshoot technical issues related to exchange systems, providing timely resolutions to minimize disruptions.",
        "Communicate effectively with cross-functional teams to understand requirements and deliver solutions that meet business needs.",
      ],
    },
    {
      company: "GoPay",
      website: "https://gopay.co.id",
      role: "Senior Product Engineer",
      duration: {
        start: "February 2017",
        end: "July 2022",
      },
      description:
        "Involved with various projects mostly on integrating with third-parties. During the last 2 years, focus on GoBills - GoPay solution for bills payment.",
      devStacks: {
        languages: ["Java", "Go"],
        technologies: [
          "Envoy",
          "mTLS",
          "Kafka",
          "Redis",
          "PostgreSQL",
          "Protocol Buffer",
          "gRPC",
        ],
        tools: [
          "Gitlab CI/CD",
          "Google Cloud Platform",
          "Docker",
          "Kubernetes",
        ],
      },
      projects: [
        "Colaborate in the development of Project Ubiquity, aimed at extending GoPay's reach more users, resulting in a significant increase in user acquisition and transaction volume.",
        "Implemented GoPay payment integration on the Google Play platform, enhancing the accessibility of GoPay services to a broader user base and facilitating seamless transactions within the Android ecosystem.",
        "Orchestrated the migration from proprietary QR codes to standardized QRIS (Quick Response Code Indonesian Standard) compliant codes in compliance with regulatory standards, ensuring interoperability and security in payment transactions.",
        "Managed the integration with third-party aggregators for various services including bill payments, phone credit purchases, and entertainment subscriptions, optimizing user experience and expanding GoPay's service offerings.",
        "Collaborated with cross-functional teams including product managers, designers, and QA engineers to ensure the timely delivery of high-quality software solutions meeting business requirements and customer needs.",
        "Conducted code reviews, implemented best practices, and maintained documentation to ensure code quality, scalability, and maintainability of GoPay's software systems.",
      ],
    },
    {
      company: "Tokopedia",
      website: "https://tokopedia.com",
      role: "Web Developer",
      duration: {
        start: "January 2015",
        end: "January 2017",
      },
      description:
        "Working with rapidly growing team from 4 people to 10+ people. The team responsible to protect user account credentials and improve login security.",
      devStacks: {
        languages: ["Perl", "Go"],
        technologies: ["MySQL", "Redis"],
        tools: ["Git", "Jira", "Jenkins"],
      },
      projects: [
        "Spearheaded feature maintenance and bug resolution efforts, ensuring optimal performance and user satisfaction on the e-commerce platform.",
        "Collaborated with designers, project managers, and tech leads to overhaul the login with experience, resulting in a lot of metrics that used for improvement in the future.",
        "Developed and optimized APIs tailored for mobile applications.",
        "Played a pivotal role in initiating and executing the codebase migration from Perl to Go, enhancing code maintainability and scalability while minimizing downtime and technical debt.",
      ],
    },
  ],
};

// markup
const IndexPage = () => {
  return (
    <main>
      <SEO></SEO>
      <div className={"bg-midnight-900 text-white"}>
        <div
          className={
            "container mx-auto px-10 pt-16 sm:px-14 md:px-20 md:pt-52 xl:px-40 2xl:px-64"
          }
        >
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
          <div className="mx-auto max-w-sm md:max-w-lg">
            <img
              src={svg}
              alt={"Man in a table with laptop illustration by Themeisle.com"}
              title={"Man in a table with laptop illustration"}
              width={900}
              height={600}
            ></img>
          </div>
          <Credit></Credit>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
