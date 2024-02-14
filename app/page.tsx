import React from "react";
import Landing from "@/components/sections/Landing";
import Barbers from "@/components/sections/Barbers";

function Home() {
  return (
    <>
      <Landing />
      <div className=" w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <Barbers />
      </div>
    </>
  );
}

export default Home;
