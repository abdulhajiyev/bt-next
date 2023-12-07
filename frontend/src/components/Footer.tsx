"use client";

import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";
import { useScopedI18n } from "locales/client";
import { FaPhone } from "react-icons/fa6";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "1",
    title: "Getting started",
    menus: [
      { href: "#", label: "Installation" },
      { href: "#", label: "Release Notes" },
      { href: "#", label: "Upgrade Guide" },
      { href: "#", label: "Browser Support" },
      { href: "#", label: "Editor Support" },
    ],
  },
  {
    id: "2",
    title: "Getting started",
    menus: [
      { href: "#", label: "Installation" },
      { href: "#", label: "Release Notes" },
      { href: "#", label: "Upgrade Guide" },
      { href: "#", label: "Browser Support" },
      { href: "#", label: "Editor Support" },
    ],
  }
];

const Footer: React.FC = () => {
  const scopedT = useScopedI18n("footer");
  const FOOTER = [
    {
      id: "1",
      title: scopedT("termsAndPolicies.label"),
      menus: [
        { href: "#", label: scopedT("termsAndPolicies.privacyPolicy") },
        { href: "#", label: scopedT("termsAndPolicies.termsOfUse") },
        { href: "#", label: scopedT("termsAndPolicies.accessibility") },
        { href: "#", label: scopedT("termsAndPolicies.rewardSystemPolicy") },
      ],
    },
    {
      id: "2",
      title: scopedT("help.label"),
      menus: [
        { href: "#", label: scopedT("help.support") },
        { href: "#", label: scopedT("help.cancelBookings") },
        { href: "#", label: scopedT("help.useCoupon") },
        { href: "#", label: scopedT("help.refundPolicies") },
        { href: "#", label: scopedT("help.internationalTravelDocuments") },
      ],
    }
  ]
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <FooterNav />
      <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          <Logo />
          <div className="flex flex-col items-start gap-2">
            <div key={1} className="text-sm">
              <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
                {scopedT('contact.label')}
              </h2>

              <a
                key={1}
                className="mt-5 flex items-center gap-1 text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href='tel:+994502009999'
              >

                <FaPhone className="ml-1" />
                <p className="ml-2">
                  +994502009999
                </p>

              </a>

            </div>
            <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
          </div>
          {FOOTER.map(renderWidgetMenuItem)}
        </div>
      </div>

    </>
  );
};

export default Footer;
