import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import { TaxonomyType } from "@/data/types";

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

export default function Page({ params }: { params: { slug: string } }) {
	return (
		<div className="container pt-10 lg:pt-16 lg:pb-0 relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
			{/* <SectionGridFeaturePlaces
				cardType="card2"
				tabs={[]}
				heading="Turlar"
				subHeading=""
			/> */}
			<SectionSliderNewCategories sliderStyle="style1" categoryCardType="card4" categories={TOURS} className="mt-0" />

			{/* All tours {params.slug} */}
		</div>
	);
}
