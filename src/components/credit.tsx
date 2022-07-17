import * as React from "react";

const Credit = () => {
  return (
    <section className="flex flex-col pt-20 pb-10 text-xs text-midnight-500 gap-y-2">
      <p className="font-aglet text-center">
        Designed and built by{" "}
        <a href="https://frenky.id" target={"_blank"}>
          Frenky Harry
        </a>
      </p>
      <p className="font-aglet text-center">
        <a href="https://www.gatsbyjs.com/" target={"_blank"}>
          Gatsby
        </a>{" "}
        +{" "}
        <a href="https://tailwindcss.com/" target={"_blank"}>
          Tailwind
        </a>
      </p>
    </section>
  );
};

export default Credit;
