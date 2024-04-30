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
          <Header tabs={tabs} setTabs={setTabs} />
          <BarberCards barbersToDisplay={activeBarbers} />
        </div>
      </div>
    </>
  );
}
