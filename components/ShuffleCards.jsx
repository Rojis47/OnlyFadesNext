import React, { useState } from "react";
import Link from "next/link";
import barbers from "../components/picImports";
import { CalendarIcon } from "./icons";
import GradientShadowButton from "@/components/GradientShadowButton";
import Image from "next/image";

const ShuffleCards = ({
  setShowModal,
  setSelectedBarber,
  setOpen,
  setIsLoading,
}) => {
  return (
    <>
      <div className="grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
        {barbers.map((barber, index) => (
          <div
            key={barber.name}
            className=" h-[380px] w-[280px] sm:h-[450px] sm:w-[350px] grid  mx-auto  place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md"
          >
            <Image
              onClick={() => {
                setSelectedBarber(barber);
                setShowModal(true);
              }}
              src={barber.imageUrl}
              alt={`Image of `}
              className="object-cover aspect-[14/13] select-none  w-3/4 drop-shadow-3xl mx-auto transition ease-in-out border-2 rounded-2xl cursor-pointer border-white bg-slate-200"
            />
            <span className="text-lg font-medium text-center text-indigo-400">
              {barber.name}
            </span>
            <span className="text-lg italic text-center text-slate-400 ">
              {barber.role}
            </span>
            <span className="mx-auto">
              <GradientShadowButton>
                <div
                  onClick={() => {
                    setIsLoading(true);
                    setSelectedBarber(barber);
                    setOpen(true);
                  }}
                  className="z-10 flex items-center justify-center w-full gap-3 py-2 mx-auto "
                  smooth="true"
                >
                  Book
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <CalendarIcon />
                  </svg>
                </div>
              </GradientShadowButton>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShuffleCards;
