import React from "react";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[url('/blurry-gradient-haikei.svg')] bg-no-repeat bg-center bg-cover">
      <div className="mx-auto mt-6 max-w-[50rem] text-center">
        <h1 className="font-pacifico text-6xl text-yellow-950">
          Connect, Help, and Thrive in Your Community
        </h1>
        <div className="mt-10 px-10 mx-auto text-lg text-black/70">
          <p>
            Be part of a community that&apos;s redefining to support one
            another.
          </p>
          <p>
            Together, let&apos;s build a stronger, more compassionate community
            - one connection at a time.
          </p>
        </div>

        <button className="bg-[#0066FF]/80 hover:0066FF] hover:shadow-md hover:shadow-black/20 text-white px-6 py-2 rounded-full mt-10 group">
          Join Today{" "}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
