"use client";

import React from "react";
import {
  MetaLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <section className="pt-32 bg-[url('/footer-section-background.svg')] bg-no-repeat bg-center bg-cover">
      <footer className="p-10 h-96 bg-gradient-to-b from-gray-200 to-transparent flex justify-between">
        <div>
          New York City, USA
          <br />
          <a
            href="mailto:info@cnep.org"
            className="text-yellow-950 hover:underline"
          >
            info@cnep.org
          </a>
          <br />
          <a
            href="tel:+18001234567"
            className="text-yellow-950 hover:underline"
          >
            +18001234567
          </a>
          <br />© 2024 CNEP (WE4U)
        </div>

        <div className="flex gap-x-4">
          <a
            href="https://www.facebook.com/cnep"
            className="text-yellow-950 hover:underline"
          >
            <MetaLogo size={26} />
          </a>
          <a
            href="https://twitter.com/cnep"
            className="text-yellow-950 hover:underline"
          >
            <XLogo  size={26}/>
          </a>
          <a
            href="https://instagram.com/cnep"
            className="text-yellow-950 hover:underline"
          >
            <InstagramLogo  size={26}/>
          </a>
          <a
            href="https://www.linkedin.com/company/cnep"
            className="text-yellow-950 hover:underline"
          >
            <LinkedinLogo  size={26}/>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
