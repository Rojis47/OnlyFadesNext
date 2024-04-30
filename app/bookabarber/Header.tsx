"use client";
import { TTab } from "@/app/types";

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
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset text-black ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            onChange={(e) => handleTabClick(e.target.value)}
            value={tabs.find((tab) => tab.current)?.id}
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
