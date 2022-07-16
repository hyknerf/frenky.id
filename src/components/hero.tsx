import * as React from "react";
import Social from "./social";

const Hero = () => {
  return (
    <section className="flex-row py-20">
      <div className="font-mono text-lg text-sun-500">Hello, my name is</div>
      <div className="mt-3 text-7xl font-bold font-['paralucent'] text-sun-500">Frenky Harry.</div>
      <div className="mt-3 text-6xl font-medium font-['paralucent'] text-sun-500">
        I help building software for the people.
      </div>
      <p className="max-w-xl mt-10 leading-relaxed text-gray-200 text-md">
        Sed imperdiet faucibus pretium. Nam porttitor purus volutpat odio ornare
        rutrum ut eu arcu. Aliquam malesuada nulla sed quam hendrerit, id tempor
        magna fringilla. Etiam tincidunt eros vitae vestibulum interdum.
        Curabitur vestibulum, lectus ac dignissim faucibus, velit dolor
        dignissim diam, id malesuada justo tortor et justo. Vivamus ullamcorper
        lorem id.
      </p>
      <Social></Social>
    </section>
  );
};

export default Hero;
