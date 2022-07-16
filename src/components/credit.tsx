import * as React from "react";

const Credit = () => {
  return (
    <section className="flex flex-col pt-20 pb-10 text-xs text-gray-300 gap-y-2">
      <p className="font-mono text-center">
        Designed and built by{" "}
        <a href="https://frenky.id" target={"_blank"}>
          Frenky Harry
        </a>
      </p>
      <p className="font-mono text-center">
        <a href="https://www.gatsbyjs.com/" target={"_blank"}>
          GatsbyJS
        </a>{" "}
        +{" "}
        <a href="https://tailwindcss.com/" target={"_blank"}>
          TailwindCSS
        </a>
      </p>
    </section>
  );
};

export default Credit;
