import rightImg from "@/images/about-hero-right.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import SectionHero from "./SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection";
import SectionClientSay from "@/components/SectionClientSay";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import AboutPDF from "../../../docs/About B&T.pdf";
import { ReactPortal } from "react";

export type PageAboutProps = {}

const PageAbout: FC<PageAboutProps> = ({}) => {
	return (
    <div className={`nc-PageAbout overflow-hidden relative flex items-center justify-center`}>
			<iframe
				src={AboutPDF}
				style={{ width: "60%", height: "1080px"}}
				title="About PDF"
			/>


		</div>
	);
};

export default PageAbout;
