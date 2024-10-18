import React from "react";

const Benefits = () => {
  return (
    <section className="min-h-screen bg-[url('/benefits-section-background.svg')] bg-no-repeat bg-center bg-cover">
      <div className="mx-auto max-w-[50rem] text-center pt-20">
        <h2 className="font-pacifico text-6xl text-yellow-950">Benefits</h2>
      </div>

      <div className="mx-auto mt-20 max-w-[65rem] flex items-center justify-between">
        <div className="p-8 rounded-2xl backdrop-blur-md border border-white/50 shadow-lg shadow-black/10">
          <p className="text-yellow-950 text-3xl font-semibold mb-6">
            Foster Connections
          </p>
          <p className="max-w-72">
            Meet new people and build relationships that matter.
          </p>
        </div>

        <div className="text-right flex flex-col items-end p-8 rounded-2xl backdrop-blur-md border border-white/50 shadow-lg shadow-black/10">
          <p className="text-yellow-950 text-3xl font-semibold mb-6">
            Address Unmet Needs
          </p>
          <p className="max-w-80 text-right">
            Get help when you need it most, and make a difference in your
            community.
          </p>
        </div>
      </div>

      <div className="mx-auto w-fit text-center mt-20 p-8 rounded-2xl backdrop-blur-md border border-white/50 shadow-xl shadow-black/20">
        <p className="text-yellow-950 text-3xl font-semibold mb-6">
          Disaster Resilience
        </p>
        <p className="mx-auto max-w-72">
          Stay safe and connected during emergencies. CNEP is here to help.
        </p>
      </div>
    </section>
  );
};

export default Benefits;
