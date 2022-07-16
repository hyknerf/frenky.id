import * as React from "react";
import Tags from "./tag";

const Interest = () => {
  return (
    <section className="pb-20 2xl:px-20">
      <h2 className="text-3xl font-extrabold font-['paralucent'] before:content-['03.'] before:font-mono before:mr-2 text-gray-300 before:text-sun-500 before:text-2xl text-sun before:bottom-2">
        Things That Interest Me Right Now
      </h2>
      <p className="max-w-2xl my-6 leading-relaxed text-gray-300 text-md">
        Web3 is one of recent phenomenon that caught my attention. It is
        stunning how fast things moving in blockchain world, adoption and
        technologies are one of many aspect that moving rapidly. Enthusiast
        claim that this is the future, but I've yet to be convinced by that. But
        learning something new will never hurt.
      </p>
      <p className="max-w-2xl my-6 leading-relaxed text-gray-300 text-md">
        Other things that currently I like to do is learning the fundamentals. I
        got my bachelor degree in Information Technolgy, so I don't have that
        deep understanding of computers compared to others from Computer Science
        school. It's fascinating to learn what's behind the technologies that I
        use on daily basis professionally.
      </p>
    </section>
  );
};

export default Interest;
