import type { JSX } from "react";

/**
 * renders the navbar component.
 * @returns {JSX.Element} the navbar component.
 */
const Navbar = (): JSX.Element => {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between px-10 py-4">
      <div className="font-pacifico w-44 text-3xl text-yellow-950 font-bold">
        WE4U
      </div>
      <nav className="flex gap-x-2 p-[6px] rounded-full bg-white/50 backdrop-blur-md shadow-lg shadow-black/10">
        <button className="px-4 py-[6px] hover:bg-white/40 rounded-full hover:shadow-md hover:shadow-yellow-950/10">
          Home
        </button>
        <button className="px-4 py-[6px] hover:bg-white/40 rounded-full hover:shadow-md hover:shadow-yellow-950/10">
          How It Works
        </button>
        <button className="px-4 py-[6px] hover:bg-white/40 rounded-full hover:shadow-md hover:shadow-yellow-950/10">
          About Us
        </button>
        <button className="px-4 py-[6px] hover:bg-white/40 rounded-full hover:shadow-md hover:shadow-yellow-950/10">
          Contact
        </button>
      </nav>
      <div className="w-44 items-end flex justify-end">
        <button className="flex items-center gap-x-2 px-4 py-[6px]">
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
