"use client";

import React, { useState, useEffect } from "react";
import BarberCards from "@/components/BarberCards";
import Header from "./Header";
import { TTab } from "@/app/types";
import { TBarber } from "@/app/types";
import barbers from "@/components/picImports";

// view location details then let them chose location based on well location => set sate based on location the pick

const initialTabs: TTab[] = [
  {
    name: "All",
    id: "ALL",
    iFrameUrl:
      "https://storage.googleapis.com/maps-solutions-gulqoyxm20/locator-plus/4ph2/locator-plus.html",
    current: true,
  },
  {
    name: "North Round Rock",
    id: "only-fades-round-rock",
    iFrameUrl:
      "https://storage.googleapis.com/maps-solutions-gulqoyxm20/commutes/x3ui/commutes.html",
    current: false,
  },
  {
    name: "DownTown Round Rock",
    id: "onlyfades-downtown-use-round-rock",
    iFrameUrl:
      "https://storage.googleapis.com/maps-solutions-gulqoyxm20/commutes/cy01/commutes.html",
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
          <div className="gap-10 xl:flex">
            <div className="relative inset-0 w-full xl:w-[70%] px-6 overflow-hidden isolate sm:py-24 lg:overflow-visible lg:px-0">
              <div className="sticky top-10 ">
                <h3 className="m-auto my-3 font-sans text-3xl text-center text-white">
                  Our Locations : <br /> {tabs.find((tab) => tab.current)?.name}
                </h3>
                <iframe
                  className="z-20 w-full rounded-md top-10 h-[70vh] md:h-[50vh]"
                  src={tabs.find((tab) => tab.current)?.iFrameUrl}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <BarberCards barbersToDisplay={activeBarbers} />
          </div>
        </div>
      </div>
    </>
  );
}
