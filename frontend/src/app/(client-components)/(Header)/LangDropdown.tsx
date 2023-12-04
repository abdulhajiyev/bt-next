import { Popover, Tab, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { FC, Fragment, useEffect, useState } from "react";
import { useChangeLocale, useCurrentLocale } from "locales/client";
import { useCookies } from "react-cookie";

export const headerLanguage = [
  {
    id: "az",
    name: "Azərbaycanca",
    icon: <span className="fi fi-az fis rounded-full" />,
  },
  {
    id: "ru",
    name: "Русский",
    icon: <span className="fi fi-ru fis rounded-full" />,
  },
  {
    id: "en",
    name: "English",
    icon: <span className="fi fi-gb fis rounded-full" />,
  },
];

interface LangDropdownProps {
  panelClassName?: string;
  className?: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}


const LangDropdown: FC<LangDropdownProps> = ({
  panelClassName = "",
  className = "hidden md:flex",
}) => {
  const [cookies, setCookie] = useCookies(['Next-Locale']);
  const [activeLanguage, setActiveLanguage] = useState<string>(cookies['Next-Locale'] || 'en'); // Default to English

  useEffect(() => {
    // Update the cookie when activeLanguage changes
    setCookie('Next-Locale', activeLanguage, { path: '/' });
  }, [activeLanguage, setCookie]);

  const renderLang = (close: () => void) => {
    const changeLocale = useChangeLocale();
    const locale = useCurrentLocale();

    return (
      <div className="grid gap-7 lg:grid-cols-3 cursor-pointer">
        {headerLanguage.map((item, index) => (
          <a
            key={index}
            onClick={() => {
              changeLocale(item.id as "az" | "en" | "ru");
              setActiveLanguage(item.id);
              close();
            }}
            className={`flex items-center justify-center p-1 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
              activeLanguage === item.id
                ? "bg-gray-100 dark:bg-gray-700"
                : "opacity-80"
            }`}
          >
            <div className="">
              <p className="text-sm font-medium">
                {item.icon} {item.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    );
  };

  return (
    <>
      <Popover className={`LangDropdown relative ${className}`}>
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-80"} group self-center h-10 sm:h-12 px-3 py-1.5 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 font-medium hover:text-opacity-100 focus:outline-none `}
            >
              <GlobeAltIcon className="w-5 h-5 opacity-80" />
              <ChevronDownIcon
                className={`${open ? "-rotate-180" : "text-opacity-70"}
                  ml-1 h-4 w-4  group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-20 top-full right-0 max-w-sm min-w-max">
                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5">
                  {renderLang(close)}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};
export default LangDropdown;