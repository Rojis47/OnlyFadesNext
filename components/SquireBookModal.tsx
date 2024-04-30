import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { TBarber, BarberSchema } from "../app/types";
import { Spinner } from "@nextui-org/react";

type SquireBookModalProps = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  barber: TBarber;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

function SquireBookModal({
  showModal,
  setShowModal,
  barber,
  isLoading,
  setIsLoading,
}: SquireBookModalProps) {
  const result = BarberSchema.parse(barber);

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity backdrop-blur-md bg-opacity-10" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden rounded-md">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                  <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 py-6 overflow-y-auto rounded-md sm:px-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            className="relative p-2 -m-2 text-gray-400 cursor-pointer hover:text-gray-500"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>

                            <XMarkIcon
                              className="w-10 h-10 text-black"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>

                      {isLoading && (
                        <div className="absolute z-0 translate-y-1/2 right-1/2 bottom-1/2 ">
                          <Spinner className="z-0" />
                        </div>
                      )}
                      <iframe
                        className="w-full h-full rounded-xl"
                        src={`https://getsquire.com/booking/book/${
                          barber.location
                        }/${barber.role.toLowerCase()}/${
                          barber.squireId
                        }/services?platform=widget`}
                        title="External Content"
                        onLoad={() => setIsLoading(false)}
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default SquireBookModal;
