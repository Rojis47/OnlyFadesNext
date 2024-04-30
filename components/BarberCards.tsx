"use client";
import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import ShuffleCards from "./ShuffleCards";
import SquireBookModal from "./SquireBookModal";
import barbers from "./picImports";
import { TBarber } from "@/app/types";
import { log } from "console";

type Props = { barbersToDisplay: TBarber[] };

export default function BarberCards({ barbersToDisplay }: Props) {
  const [selectedBarber, setSelectedBarber] = useState(barbers[0]);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="">
      <ShuffleCards
        barbers={barbersToDisplay}
        setIsLoading={setIsLoading}
        setSelectedBarber={setSelectedBarber}
        setShowModal={setShowModal}
        setOpen={setOpen}
      />
      {showModal && (
        <ImageGallery
          showModal={showModal}
          setShowModal={setShowModal}
          barber={selectedBarber}
        />
      )}
      <SquireBookModal
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        showModal={open}
        setShowModal={setOpen}
        barber={selectedBarber}
      />
    </div>
  );
}
