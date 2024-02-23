import GallerySlider from "@/components/GallerySlider";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import { DEMO_EXPERIENCES_LISTINGS } from "@/data/listings";
import { TaxonomyType } from "@/data/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getScopedI18n } from "locales/server";

const TOURS: TaxonomyType[] = [
	{
		id: "1",
		href: "/tours/domestic/shusha",
		name: "Şuşa",
		taxonomy: "category",
		thumbnail: "https://shusha.gov.az/uploads/fsfwf.png",
	},
	{
		id: "2",
		href: "/tours/domestic/qabala",
		name: "Qəbələ",
		taxonomy: "category",
		count: 188288,
		thumbnail:
			"https://upload.wikimedia.org/wikipedia/commons/6/63/Q%C9%99b%C9%99l%C9%99_park-bulvar_kompleksi.jpg",
	},
	{
		id: "3",
		href: "/tours/domestic/nakhchivan",
		name: "Naxçıvan",
		taxonomy: "category",
		count: 188288,
		thumbnail:
			"https://upload.wikimedia.org/wikipedia/commons/1/12/M%C3%B6m%C3%BCn%C9%99xatun_t%C3%BCrb%C9%99si_2018.jpg",
	},
	{
		id: "4",
		href: "/tours/domestic/sugovushan",
		name: "Suqovuşan",
		taxonomy: "category",
		count: 188288,
		thumbnail:
			"https://upload.wikimedia.org/wikipedia/commons/7/72/Suqovushan_1.jpg",
	},
];
const DEMO_DATA = DEMO_EXPERIENCES_LISTINGS[0];
const { galleryImgs, href, saleOff, id } = DEMO_DATA;
const ExperienceCard = ({ href, galleryImgs, tourName }) => (
	<div className={"nc-ExperiencesCard group relative"}>
		<div className="relative w-full rounded-2xl overflow-hidden ">
			<GallerySlider
				ratioClass="aspect-w-3 aspect-h-3"
				galleryImgs={galleryImgs}
				href={href}
			/>
		</div>
		<Link href={href}>
			<div className="py-4 space-y-3">
				<div className="space-y-2">
					<div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
						<span className="text-base font-semibold">{tourName}</span>
					</div>
				</div>
				<div className="border-b border-neutral-100 dark:border-neutral-800" />
			</div>
		</Link>
	</div>
);

async function getData(locale) {
	const res = await fetch(
		`https://cms.bookand.travel/api/tours?locale=${locale}&where[isDomestic][equals]=true&where[isHidden][not_equals]=true`,
		{ cache: "no-store" },
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	// console.log(data.docs);
	const experiences = data.docs.map((doc) => ({
		href: `/tours/${doc.id}`,
		galleryImgs: doc.tourImages.map((image) => image.image.url),
		tourName: doc.title,
	}));

	return experiences;
}

export default async function Page({
	params,
}: { params: { slug: string; locale: string } }) {
	const experiences = await getData(params.locale);
	const t = await getScopedI18n("navigation.tours");
	return (
		<div className="container pt-10 lg:pt-16 lg:pb-0 relative space-y-12 mb-24 lg:space-y-14 lg:mb-28">
			<SectionSliderNewCategories
				sliderStyle="style1"
				categoryCardType="card4"
				categories={TOURS}
				className="mt-0"
			/>
			<h1 className="text-3xl md:text-4xl font-semibold">{t("inCountry")}</h1>
			<div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{experiences.map((experience, index) => (
					<ExperienceCard key={index} {...experience} />
				))}
			</div>

			{/* All tours {params.slug} */}
		</div>
	);
}
