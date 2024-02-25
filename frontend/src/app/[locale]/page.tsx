import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import SectionVideos from "@/components/SectionVideos";
import SectionClientSay from "@/components/SectionClientSay";
import SectionSliderTours from "@/components/SectionSliderTours";
import { Carousel, CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import Link from "next/link";
import GallerySlider from "@/components/GallerySlider";
import Button from "@/shared/Button";
import ButtonPrimary from "@/shared/ButtonPrimary";

const TOURS: TaxonomyType[] = [
	{
		id: "1",
		href: "/tours/domestic/shusha",
		name: "Şuşa",
		taxonomy: "category",
		count: 188288,
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
	{
		id: "5",
		href: "/tours/abroad/bodrum",
		name: "Bodrum",
		taxonomy: "category",
		count: 188288,
		thumbnail:
			"https://upload.wikimedia.org/wikipedia/commons/c/cb/Bodrum_castle_3.JPG",
	},
];

const DEMO_CATS_2: TaxonomyType[] = [
	{
		id: "1",
		href: "/listing-stay-map",
		name: "Enjoy the great cold",
		taxonomy: "category",
		count: 188288,
		thumbnail:
			"https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
	},
	{
		id: "2",
		href: "/listing-stay-map",
		name: "Sleep in a floating way",
		taxonomy: "category",
		count: 188288,
		thumbnail:
			"https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	},
	{
		id: "3",
		href: "/listing-stay-map",
		name: "In the billionaire's house",
		taxonomy: "category",
		count: 188288,
		thumbnail:
			"https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	},
	{
		id: "4",
		href: "/listing-stay-map",
		name: "Cool in the deep forest",
		taxonomy: "category",
		count: 188288,
		thumbnail:
			"https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	},
	{
		id: "5",
		href: "/listing-stay-map",
		name: "In the billionaire's house",
		taxonomy: "category",
		count: 188288,
		thumbnail:
			"https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	},
	{
		id: "6",
		href: "/listing-stay-map",
		name: "In the billionaire's house",
		taxonomy: "category",
		count: 188288,
		thumbnail:
			"https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
	},
	{
		id: "7",
		href: "/listing-stay-map",
		name: "Cool in the deep forest",
		taxonomy: "category",
		count: 188288,
		thumbnail:
			"https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	},
];

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
						<p className="text-4xl font-semibold">Latest tours</p>
					</div>
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} {...experience} />
					))}
					<div
						id="button-container"
						className="col-span-full flex justify-center items-center"
					>
						<a href="/tours" className="text-lg font-semibold">
							<ButtonPrimary>See all tours</ButtonPrimary>
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
