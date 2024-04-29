"use client";

import React from "react";
import BarberCards from "@/components/BarberCards";
import BGGrid from "./background";

export default function page() {
  return (
    <>
      <BGGrid />
      <div id="Barbers" className="py-24 ">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-sans text-3xl tracking-tight text-white sm:text-4xl">
              Book With Our Barbers
            </h2>
            <p className="mt-6 font-sans text-lg leading-8 text-gray-300">
              We’re a barbershop with a dynamic group of individuals who are
              passionate about what we do and dedicated to delivering the best
              cuts and trims for our clients.
            </p>
          </div>
          <BarberCards />
        </div>
      </div>
    </>
  );
}
