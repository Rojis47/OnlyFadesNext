"use client";

import { useState } from "react";
import Image from "next/image";
import bgImage from "@/app/assets/images/else/bgimg.jpg";
import Link from "next/link";
import SquireBookModal from "../SquireBookModal";

import logo from "@/app/assets/logo/OnlyFades.png";
import { motion } from "framer-motion";

function Landing() {
  return (
    <div className="h-dvh">
      <Image
        className="myBackgroundImage isolate -z-10"
        alt="Background Image"
        src={bgImage}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />

      <div className="absolute inset-0 object-cover w-full h-full bg-black bg-opacity-50 -z-10"></div>

      {
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-transparent to-black"
          style={{
            backgroundImage:
              "linear-gradient(to right, black 1%, transparent 50%, black 99%)",
          }}
        ></div>
      }

      <motion.div
        className="max-w-2xl pt-32 mx-auto sm:py-48 lg:py-56"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.3 },
        }}
      >
        <div className="text-center ">
          <Link href="#" className="flex items-center justify-center">
            <Image width={400} height={400} src={logo} alt="" />
          </Link>
          <motion.h1
            className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-6xl"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Expert Barbershop Exceptional Results
          </motion.h1>
          <motion.p
            className="mt-6 font-serif text-xl leading-8 text-gray-300"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Quality cuts, razor shaves, relaxed vibe. Experience a new approach
            to fresh Barbershop.
          </motion.p>
          <motion.div
            className="flex flex-col items-center justify-center px-2 mt-10 gap-x-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.7 }}
          >
            <Link
              href="#Barbers"
              className="grid w-48 px-4 py-2 font-semibold leading-6 text-black transition-all duration-200 ease-in bg-white border border-white rounded-full text-xlg place-content-center hover:bg-black hover:border-black hover:text-white"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Landing;
