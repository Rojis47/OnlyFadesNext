"use client";

import React, { useEffect } from "react";
const SquireWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.getsquire.com/widget.js?" + Date.now();
    script.defer = true;
    script.type = "text/javascript";
    script.setAttribute("brand", "7766bb18-a623-492a-8224-1078c4946667");
    script.setAttribute("x-squire-inline-enabled", "true");

    document.head.appendChild(script);
    console.log(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default SquireWidget;
