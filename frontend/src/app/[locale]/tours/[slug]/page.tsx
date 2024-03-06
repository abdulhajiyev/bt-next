"use client";

import React, { FC, useEffect, useState } from "react";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Route } from "next";
import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery";
import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";
import Textarea from "@/shared/Textarea";
import { useScopedI18n } from "locales/client";

export type ListingExperiencesDetailPageProps = {};

const Page: FC<ListingExperiencesDetailPageProps> = ({ params }) => {
	const td = useScopedI18n("tours.default");
	const tc = useScopedI18n("footer.contact");
	const thisPathname = usePathname();
	const router = useRouter();
	const [tourData, setTourData] = useState({
		id: null,
		title: "",
		slug: "",
		editSlug: null,
		location: "",
		tourImages: [],
		isDomestic: null,
		tourInfo: [],
		price: [],
		includedInPrice: [],
		includedInTour: [],
		updatedAt: "",
		createdAt: "",
	});
	const id = thisPathname.split("/").pop();
	// console.log("id", id);

	useEffect(() => {
		const fetchTourData = async () => {
			try {
				const res = await fetch(
					`https://cms.bookand.travel/api/tours/${id}?locale=${params.locale}`,
					{ cache: "no-store" },
				);
				if (res.ok) {
					const data = await res.json();
					// console.log(data);
					setTourData(data);
				} else {
					console.error("Failed to fetch tour data");
				}
			} catch (error) {
				console.error("Error fetching tour data:", error);
			}
		};
		if (id) {
			fetchTourData();
		}
	}, [id, params.locale]); // Added params.locale as a dependency
	const searchParams = useSearchParams();
	const modal = searchParams?.get("modal");

	const PHOTOS = tourData.tourImages.map(
		(imageObject) => imageObject.image.url,
	);

	const handleOpenModalImageGallery = () => {
		router.push(`${thisPathname}/?modal=gallery` as Route);
	};
	const handleCloseModalImageGallery = () => {
		const params = new URLSearchParams(document.location.search);
		params.delete("modal");
		router.push(`${thisPathname}/?${params.toString()}` as Route);
	};

	const imageGallery: ListingGalleryImage[] = [...PHOTOS].map(
		(item, index): ListingGalleryImage => {
			return {
				id: index,
				url: item,
			};
		},
	);

	const renderSection1 = () => {
		const data = tourData;
		return (
			<div className="listingSection__wrap !space-y-6">
				{/* 2 */}
				<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
					{data.title}
				</h2>

				{/* 3 */}
				<div className="flex items-center space-x-4">
					<span>
						<i className="las la-map-marker-alt"></i>
						<span className="ml-1"> {data.location}</span>
					</span>
				</div>

				{/* 5 */}
				<div className="w-full border-b border-neutral-100 dark:border-neutral-700" />
			</div>
		);
	};

	const renderSection2 = () => {
		const data = tourData;
		return (
			<div className="listingSection__wrap">
				<div
					className="text-neutral-6000 dark:text-neutral-300 prose dark:prose-invert"
					style={{ overflowWrap: "break-word", wordWrap: "break-word" }}
					dangerouslySetInnerHTML={{ __html: data.tourInfo_html }}
				/>
			</div>
		);
	};

	const renderSection3 = () => {
		const data = tourData;
		if (!data.includedInPrice || data.includedInPrice.length === 0) {
			return null; // Don't render anything if there's no data
		}
		return (
			<div className="listingSection__wrap">
				<div>
					<h2 className="text-2xl font-semibold">{td("includedInPrice")}</h2>
				</div>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
					{data.includedInPrice.map((item) => (
						<div key={item.id} className="flex items-center space-x-3">
							<i className="las la-check-circle text-2xl" />
							<span>{item.incPrice}</span>
						</div>
					))}
				</div>
			</div>
		);
	};

	const [formData, setFormData] = useState({
		name: "",
		phoneNumber: "",
		email: "",
		additionalNotes: "",
		tour: tourData.title,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				// Handle success, e.g., show a success message or redirect
				console.log("Email sent successfully");
				window.alert(
					"Sorğunuz uğurla göndərildi. Ən qısa zamanda sizinlə əlaqə saxlanılacaq.",
				);
			} else {
				// Handle error, e.g., show an error message
				console.error("Failed to send email");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const renderSidebar = () => {
		return (
			<div className="listingSectionSidebar__wrap shadow-xl">
				<p className="text-2xl font-semibold">{td("price")}</p>
				<div className="flex justify-between flex-col">
					{tourData.price.map((priceItem) => (
						<div key={priceItem.id}>
							<span className="text-lg font-medium block max-w-xs">
								<span className="uppercase">
									{priceItem.value} {priceItem.currency}
								</span>
								<span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400 text-wrap break-words">
									{priceItem.description}
								</span>
							</span>
						</div>
					))}
				</div>

				{/* FORM */}
				<form className="flex flex-col gap-4 border-neutral-200 dark:border-neutral-700 rounded-3xl">
					<label className="block">
						<Input
							placeholder={tc("fullName")}
							type="text"
							className="mt-1"
							value={formData.name}
							onChange={(e) =>
								setFormData({ ...formData, name: e.target.value })
							}
						/>
					</label>
					<label className="block">
						<Input
							placeholder={tc("phone")}
							type="tel"
							className="mt-1"
							value={formData.phoneNumber}
							onChange={(e) =>
								setFormData({ ...formData, phoneNumber: e.target.value })
							}
						/>
					</label>
					<label className="block">
						<Input
							type="email"
							placeholder={tc("emailAddress")}
							className="mt-1"
							value={formData.email}
							onChange={(e) =>
								setFormData({ ...formData, email: e.target.value })
							}
						/>
					</label>
					<label className="block">
						<Textarea
							placeholder={tc("notes")}
							className="mt-1"
							rows={6}
							value={formData.additionalNotes}
							onChange={(e) =>
								setFormData({ ...formData, additionalNotes: e.target.value })
							}
						/>
					</label>
				</form>
				{/* SUBMIT */}
				<ButtonPrimary onClick={handleSubmit}>{td("bron")}</ButtonPrimary>
			</div>
		);
	};

	return (
		<div className="container mt-10 mb-10">
			{/* SINGLE HEADER */}
			<header className="rounded-md sm:rounded-xl">
				<div className="relative grid grid-cols-4 gap-1 sm:gap-2">
					<div
						className="col-span-3 row-span-3 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
						onClick={handleOpenModalImageGallery}
					>
						<Image
							alt="photo 1"
							fill
							className="object-cover  rounded-md sm:rounded-xl"
							src={PHOTOS[0]}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
						/>
						<div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity" />
					</div>
					{PHOTOS.filter((_, i) => i >= 1 && i < 4).map((item, index) => (
						<div
							key={index}
							className={`relative rounded-md sm:rounded-xl overflow-hidden ${
								index >= 2 ? "block" : ""
							}`}
						>
							<div className="aspect-w-4 aspect-h-3">
								<Image
									alt="photos"
									fill
									className="object-cover w-full h-full rounded-md sm:rounded-xl "
									src={item || ""}
									sizes="400px"
								/>
							</div>

							{/* OVERLAY */}
							<div
								className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
								onClick={handleOpenModalImageGallery}
							/>
						</div>
					))}

					<div
						className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
						onClick={handleOpenModalImageGallery}
					>
						<Squares2X2Icon className="h-5 w-5" />
						<span className="ml-2 text-neutral-800 text-sm font-medium">
							Show all photos
						</span>
					</div>
				</div>
			</header>

			{/* MAIn */}
			<main className="relative z-10 mt-11 flex flex-col lg:flex-row">
				{/* CONTENT */}
				<div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:pr-10 lg:space-y-10">
					{renderSection1()}
					{renderSection2()}
					{renderSection3()}
				</div>

				{/* SIDEBAR */}
				<div className="lg:block flex-grow mt-12 lg:mt-0">
					<div className="sticky top-32">{renderSidebar()}</div>
				</div>
			</main>
			<ListingImageGallery
				isShowModal={modal === "gallery"}
				onClose={handleCloseModalImageGallery}
				images={imageGallery}
			/>
		</div>
	);
};

export default Page;
