import React, { FC } from "react";
import Logo from "@/shared/Logo";
import Navigation from "@/shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "@/shared/ButtonPrimary";
import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import LangDropdown from "./LangDropdown";

export interface MainNavProps {
  className?: string;
}

const MainNav: FC<MainNavProps> = ({ className = "" }) => {
  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div className="px-4 lg:container py-4 relative flex justify-between items-center">
        <div className="md:flex justify-start flex-1 space-x-4 sm:space-x-10">
          <Logo className="w-20 self-center" />
          <Navigation />
        </div>

        {/* <div className="flex lg:hidden flex-[3] max-w-lg !mx-auto md:px-3 ">
          <div className="self-center flex-1">
            <HeroSearchForm2MobileFactory />
          </div>
        </div> */}

        <div className="md:flex flex-shrink-0 justify-end lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex space-x-0.5">
            <div>
              <a
                href="https://wa.me/994502009999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonPrimary icon="lab la-whatsapp">+994502009999</ButtonPrimary>
              </a>
            </div>
            <div className="px-1" />
            <SwitchDarkMode />
            <LangDropdown
              className="flex"
              panelClassName="z-10 w-screen max-w-[280px] px-4 mb-3 right-3 bottom-full sm:px-0"
            />
          </div>

          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar className="hidden md:flex"/>
            <div className="px-0.5" />
            <LangDropdown
              className="md:hidden"
              panelClassName="z-10 w-screen max-w-[280px] px-4 mb-3 right-3 bottom-full sm:px-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
