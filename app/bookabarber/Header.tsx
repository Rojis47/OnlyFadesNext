"use client";
import { TTab } from "@/app/types";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";

type HeaderProps = {
  tabs: TTab[];
  setTabs: React.Dispatch<React.SetStateAction<TTab[]>>;
};

function classNames(
  ...classes: (string | boolean | null | undefined)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ tabs, setTabs }: HeaderProps) {
  function handleTabClick(selectedId: string) {
    const updatedTabs = tabs.map((tab) => ({
      ...tab,
      current: tab.id === selectedId,
    }));
    setTabs(updatedTabs);
  }

  return (
    <div className="relative pb-5 mt-10 border-b border-white sm:pb-0">
      <div className="md:flex md:items-center md:justify-between">
        <h3 className="text-base font-semibold leading-6 text-white">
          Location
        </h3>
        <div className="flex mt-3 md:absolute md:right-0 md:top-3 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            View Location Details
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="hidden sm:block">
          <nav className="flex -mb-px space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={classNames(
                  tab.current
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-white hover:border-gray-300 hover:text-indigo-600",
                  "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="sm:hidden">
          <Select
            id="current-tab"
            name="current-tab"
            label="Active Location"
            placeholder="Select a Location"
            className="max-w-xs text-black"
            onChange={(e) => handleTabClick(e.target.value)}
            value={tabs.find((tab) => tab.current)?.id}
          >
            {tabs.map((tab) => (
              <SelectItem key={tab.id} className="text-black" value={tab.id}>
                {tab.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}
