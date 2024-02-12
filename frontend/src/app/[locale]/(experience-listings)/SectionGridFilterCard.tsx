import React, { FC } from "react";
import { DEMO_EXPERIENCES_LISTINGS } from "@/data/listings";
import { ExperiencesDataType, StayDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import ExperiencesCard from "@/components/ExperiencesCard";

export interface SectionGridFilterCardProps {
	className?: string;
	data?: StayDataType[];
}

const DEMO_DATA: ExperiencesDataType[] = DEMO_EXPERIENCES_LISTINGS.filter(
	(_, i) => i < 8,
);

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
	className = "",
	data = DEMO_DATA,
}) => {
	return (
		<div className={`nc-SectionGridFilterCard ${className}`}>
			<Heading2
				heading="Experiences in Tokyo"
			/>
			<div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{data.map((stay) => (
					<ExperiencesCard key={stay.id} data={stay} />
				))}
			</div>
		</div>
	);
};

export default SectionGridFilterCard;
