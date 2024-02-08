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

function PageHome() {
	return (
		<main className="nc-PageHome relative overflow-hidden">
			{/* GLASSMOPHIN */}
			<BgGlassmorphism />

			<div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
				{/* MAIN HERO */}
				<SectionHero className="pt-10 lg:pt-16 lg:pb-0" />

        {/* SECTION CARDS */}
        <SectionSliderNewCategories categories={TOURS} className="mt-0" />
        {/* <SectionSliderTours tours={TOURS} sliderStyle="style1" tourCardType="card3" itemPerRow={4} subHeading="Discover the hottest travel spots this month and let your wanderlust guide you to unforgettable adventures"/> */}

				{/* <SectionGridFeaturePlaces cardType="card2" /> */}
				{/* 
        <SectionSliderNewCategories
          heading="Explore by types of stays"
          subHeading="Explore houses based on 10 types of stays"
          categoryCardType="card5"
          itemPerRow={5}
        />  */}
			</div>
		</main>
	);
}

export default PageHome;
