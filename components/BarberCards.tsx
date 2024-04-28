"use client";
import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import ShuffleCards from "./ShuffleCards";
import SquireBookModal from "./SquireBookModal";
import barbers from "./picImports";

type Props = {};

export default function BarberCards({}: Props) {
  const [selectedBarber, setSelectedBarber] = useState(barbers[0]);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ul role="list" className="">
      <ShuffleCards
        barbers={barbers}
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
    </ul>
  );
}
