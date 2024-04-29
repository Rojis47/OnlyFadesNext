"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Barbers", href: "/bookabarber" },
  { name: "Contact Us", href: "#Contact" },
  { name: "Faq", href: "#faq" },
];

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="absolute inset-x-0 z-10 pointer-events-auto top-5">
      <nav
        className="flex items-center justify-end mr-4 lg:px-8 lg:justify-center lg:mr-0"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden mt-2 font-sans lg:flex lg:gap-x-12">
          {navigation.map((item, i) => (
            <Link
              className={`link font-sans leading-6 text-white duration-300 ease-in-out text-xlg hover:text-blue-500 ${
                pathname === `${item.href}` ? "text-blue-500" : ""
              }`}
              key={i}
              // smooth="true"
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-[rgba(0,0,0,0.3)] backdrop-blur-lg sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 text-center divide-y divide-gray-500/25">
              <div className="py-6 space-y-2">
                {navigation.map((item, i) => (
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    key={i}
                    href={item.href}
                    className="block px-3 py-2 -mx-3 font-sans text-base leading-7 text-white rounded-lg md:hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default NavBar;
