import React, { FC } from "react";
import GallerySlider from "@/components/GallerySlider";
import { DEMO_EXPERIENCES_LISTINGS } from "@/data/listings";
import { ExperiencesDataType } from "@/data/types";
import Link from "next/link";

export interface ExperiencesCardProps {
	className?: string;
	ratioClass?: string;
	data?: ExperiencesDataType;
	size?: "default" | "small";
}

const DEMO_DATA: ExperiencesDataType = DEMO_EXPERIENCES_LISTINGS[0];

const ExperiencesCard: FC<ExperiencesCardProps> = ({
	size = "default",
	className = "",
	data = DEMO_DATA,
	ratioClass = "aspect-w-3 aspect-h-3",
}) => {
	const { galleryImgs, href, saleOff, id } = data;



	const renderContent = () => {
		return (
			<div className={size === "default" ? "py-4 space-y-3" : "p-3 space-y-1"}>
				<div className="space-y-2">
					<div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
						<span className="text-base font-semibold">Tour Name</span>
					</div>
				</div>
				<div className="border-b border-neutral-100 dark:border-neutral-800" />
			</div>
		);
	};

	return (
		<div className={`nc-ExperiencesCard group relative ${className}`}>
			<div className="relative w-full rounded-2xl overflow-hidden ">
				<GallerySlider
					ratioClass={ratioClass}
					galleryImgs={galleryImgs}
					href={href}
				/>
			</div>
			<Link href={href}>
				<div
					className={size === "default" ? "py-4 space-y-3" : "p-3 space-y-1"}
				>
					<div className="space-y-2">
						<div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
							<span className="text-base font-semibold">Tour Name</span>
						</div>
					</div>
					<div className="border-b border-neutral-100 dark:border-neutral-800" />
				</div>
			</Link>
		</div>
	);
};

export default ExperiencesCard;
