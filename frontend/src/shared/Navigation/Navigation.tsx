"use client"
import React from "react";
import NavigationItem, { NavItemType } from "./NavigationItem";
import { NAVIGATION_DEMO } from "@/data/navigation";
import AboutPDF from "../../docs/About B&T.pdf"

import { useI18n, useScopedI18n } from 'locales/client';
import ncNanoId from "@/utils/ncNanoId";

const Navigation = () => {
  const scopedT = useScopedI18n("navigation")

  const NAV: NavItemType[] = [
			{
				// Home
				id: ncNanoId(),
				href: "/",
				name: scopedT("home"),
				// type: "dropdown",
				// isNew: true,
			},
			/* 			{
				// Tours
				id: ncNanoId(),
				name: scopedT("tours.label"),
				type: "dropdown",
				children: [
					{
						id: ncNanoId(),
						href: "/tours/abroad",
						name: scopedT("tours.abroad"),
					},
					{
						id: ncNanoId(),
						href: "/tours/domestic",
						name: scopedT("tours.inCountry"),
					},
					{
						id: ncNanoId(),
						href: "/tours",
						name: scopedT("tours.all"),
					},
				],
			}, */
			{
				// Tours
				id: ncNanoId(),
				name: scopedT("tours.label"),
				href: "/tours",
			},
/* 			{
				// Services
				id: ncNanoId(),
				href: "/services",
				name: scopedT("services"),
				// type: "dropdown",
				// isNew: true,
			}, */
			{
				// About
				id: ncNanoId(),
				name: scopedT("about.label"),
				type: "dropdown",
				// isNew: true,
				children: [
					{
						id: ncNanoId(),
						href: AboutPDF,
						name: scopedT("about.us"),
            download: true,
					},
					{
						id: ncNanoId(),
						href: "/contact",
						name: scopedT("about.contact"),
					},
				],
			},
		];
  
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:space-x-1 relative">
      {NAV.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
