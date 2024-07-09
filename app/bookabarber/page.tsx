"use client";

import React, { useState, useEffect } from "react";
import BarberCards from "@/components/BarberCards";
import Header from "./Header";
import { TTab } from "@/app/types";
import { TBarber } from "@/app/types";
import barbers from "@/components/picImports";

// view location details then let them chose location based on well location => set sate based on location the pick

const initialTabs: TTab[] = [
  { name: "All", id: "ALL", current: true },
  { name: "North Round Rock", id: "only-fades-round-rock", current: false },
  {
    name: "DownTown Round Rock",
    id: "onlyfades-downtown-use-round-rock",
    current: false,
  },
];

export default function page() {
  const [tabs, setTabs] = useState<TTab[]>(initialTabs);
  const [activeBarbers, setActiveBarbers] = useState<TBarber[]>(barbers);

  useEffect(() => {
    const activeTab = tabs.find((tab) => tab.current);
    if (activeTab?.id === "ALL") {
      setActiveBarbers(barbers);
      return;
    }
    const filteredBarbers = activeTab
      ? barbers.filter((barber) =>
          barber.location.includes(activeTab.id.toLowerCase())
        )
      : [];
    setActiveBarbers(filteredBarbers);
  }, [tabs]);

  return (
    <>
      <div id="Barbers" className="w-screen py-24">
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
          <Header tabs={tabs} setTabs={setTabs} />
          <div className="gap-10 py-24 xl:flex">
            <div className="relative inset-0 px-6 py-24 overflow-hidden -z-10 isolate sm:py-32 lg:overflow-visible lg:px-0">
              <iframe
                className="sticky z-20 rounded-md top-10"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6874.604914544434!2d-97.66778592381256!3d30.512485496242675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d170ee2682eb%3A0x4c43b9b20a3d1495!2sOnly%20Fades!5e0!3m2!1sen!2sus!4v1720489753463!5m2!1sen!2sus"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
            <BarberCards barbersToDisplay={activeBarbers} />
          </div>
        </div>
      </div>
    </>
  );
}
