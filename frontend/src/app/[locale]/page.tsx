import React from "react";
import { Carousel } from "flowbite-react";
import Link from "next/link";
import GallerySlider from "@/components/GallerySlider";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { getScopedI18n } from "locales/server";

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
		`https://cms.bookand.travel/api/tours?locale=${locale}&where[isHidden][not_equals]=true&limit=4`,
		{ cache: "no-store" },
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	const experiences = data.docs.map((doc) => ({
		href: `/tours/${doc.id}`,
		galleryImgs: doc.tourImages.map((image) => image.image.url),
		tourName: doc.title,
	}));

	return experiences;
}

async function getCarouselData() {
	const res = await fetch("https://cms.bookand.travel/api/globals/carousel", {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	const carouselData = data.items.map((doc) => ({
		href: doc.link.type === "custom" ? doc.link.url : doc.link.reference.id,
		image: doc.link.image.url,
	}));
	return carouselData;
}

async function PageHome({
	params,
}: { params: { slug: string; locale: string } }) {
	const experiences = await getData(params.locale);
	const carouselData = await getCarouselData();
	const t = await getScopedI18n("tours.default");
	return (
		<main className="nc-PageHome relative overflow-hidden h-full">
			{/* GLASSMOPHIN */}
			{carouselData.length > 0 && (
				<div className="h-72 sm:h-[500px]">
					<Carousel
						theme={{
							scrollContainer: {
								base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
								snap: "snap-x",
							},
						}}
						pauseOnHover
					>
						{carouselData.map((slide, index) => (
							<a
								key={index}
								href={
									typeof slide.href === "number"
										? `/tours/${slide.href}`
										: slide.href
								}
								className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
							>
								<img
									className="object-cover h-full w-full"
									src={slide.image}
									alt="carousel"
								/>
							</a>
						))}
					</Carousel>
				</div>
			)}
			{/* <BgGlassmorphism /> */}

			<div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
				{/* MAIN HERO */}
				{/* <SectionHero className="pt-10 lg:pt-16 lg:pb-0" /> */}

				<div className="mt-20 grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
					<div id="button-container" className="col-span-full flex items-start">
						<p className="text-4xl font-semibold">{t("latestTours")}</p>
					</div>
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} {...experience} />
					))}
					<div
						id="button-container"
						className="col-span-full flex justify-center items-center"
					>
						<a href="/tours" className="text-lg font-semibold">
							<ButtonPrimary>{t("seeAllTours")}</ButtonPrimary>
						</a>
					</div>
				</div>

				{/* SECTION CARDS */}
				{/* <SectionSliderNewCategories categories={TOURS} className="mt-0" /> */}
			</div>
		</main>
	);
}

export default PageHome;
