import React from "react";

const Feature = () => {
  return (
    <section className='min-h-screen pb-20 bg-[url("/feature-section-background.svg")] bg-no-repeat bg-center bg-cover'>
      <div className="mx-auto max-w-[50rem] text-center pt-64">
        <h2 className="font-pacifico text-6xl text-yellow-950">Features</h2>
      </div>

      <div className="mx-auto mt-20 max-w-[65rem] flex items-center justify-between">
        <div>
          <p className="text-yellow-950 text-3xl font-semibold mb-6">
            Real-Time Posting
          </p>
          <p>
            Get help when you need it most. Post your needs and connect with
            helpers in your community.
          </p>
        </div>

        <div className="text-right">
          <p className="text-yellow-950 text-3xl font-semibold mb-6">
            AI-Powered Matching
          </p>
          <p>
            Our AI-powered matching system connects you with the right helpers,
            ensuring you get the support you need
          </p>
        </div>
      </div>

      <div className="mx-auto my-24 max-w-[50rem] flex items-center justify-between">
        <div className="max-w-[30rem]">
          <p className="text-yellow-950 text-3xl font-semibold mb-6">
            No Money Problem
          </p>
          <p>
            Earn points for helping others and redeem them when you need help.
            No money required
          </p>
        </div>

        <div className="text-right max-w-[30rem]">
          <p className="text-yellow-950 text-3xl font-semibold mb-6">
            Verified Network
          </p>
          <p>
            Trusted helpers, verified by the community. Get help from people
            you can rely on
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
