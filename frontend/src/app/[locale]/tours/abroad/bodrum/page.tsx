"use client";

import React, { FC, useState } from "react";
import { ArrowRightIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import CommentListing from "@/components/CommentListing";
import FiveStartIconForRate from "@/components/FiveStartIconForRate";
import Avatar from "@/shared/Avatar";
import Badge from "@/shared/Badge";
import ButtonCircle from "@/shared/ButtonCircle";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LikeSaveBtns from "@/components/LikeSaveBtns";
import StartRating from "@/components/StartRating";
// import { PHOTOS } from "./constant";
import Image, { StaticImageData } from "next/image";
import { Route } from "next";
import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery";

import bodrum from "@/images/tours/bodrum/bodrum.jpg";
import bodrum1 from "@/images/tours/bodrum/bodrum1.webp";
import bodrum2 from "@/images/tours/bodrum/bodrum2.webp";
import bodrum3 from "@/images/tours/bodrum/bodrum3.jpg";

import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";
import Label from "@/components/Label";
import Textarea from "@/shared/Textarea";
import { useScopedI18n } from "locales/client";

export type ListingExperiencesDetailPageProps = {};

const Page: FC<ListingExperiencesDetailPageProps> = ({}) => {
	const thisPathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const modal = searchParams?.get("modal");
	const t = useScopedI18n("tours.abroad.bodrum");
	const td = useScopedI18n("tours.default");

	const PHOTOS: StaticImageData[] = [bodrum, bodrum1, bodrum2, bodrum3];

	const includes_demo = [
		{ name: t("inc1") },
		{ name: t("inc2") },
		{ name: t("inc3") },
		{ name: t("inc4") },
		{ name: t("inc5") },
	];

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
		return (
			<div className="listingSection__wrap !space-y-6">
				{/* 2 */}
				<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
					{t("description")}
				</h2>

				{/* 3 */}
				<div className="flex items-center space-x-4">
					<span>
						<i className="las la-map-marker-alt" />
						<span className="ml-1"> {t("location")}</span>
					</span>
				</div>

				{/* 5 */}
				<div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

				{/* 6 */}
				<div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
					<div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
						<i className="las la-plane text-2xl" />
						<span className="">{td("planeTicket")}</span>
					</div>
					<div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
						<i className="las la-coffee text-2xl" />
						<span className="">{td("breakfast")}</span>
					</div>
					{/* <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
            <i className="las la-plane-departure text-2xl"></i>
            <span className="">Air ticket</span>
          </div> */}
					<div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
						<i className="las la-bus text-2xl" />
						<span className="">{td("transfer")}</span>
					</div>
					<div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
						<i className="las la-user-shield text-2xl" />
						<span className="">{td("insurance")}</span>
					</div>
				</div>
			</div>
		);
	};

	const renderSection2 = () => {
		return (
			<div className="listingSection__wrap">
				<h2 className="text-2xl font-semibold">{td("includedInTour")}</h2>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
				<div className="text-neutral-6000 dark:text-neutral-300">
					<p>
						&#9679; MOONLIGHT HOTEL BODRUM 3★ (Turgutreis) – 710 USD
						<br />
						&#9679; TUNTAS BEACH HOTEL 3★ (Didim) – 796 USD
						<br />
						&#9679; OKALIPTUS HOTEL 4★ (Bitez) – 823 USD
						<br />
						&#9679; CLUB MARMA HOTEL 4★ (Akyarlar) – 875 USD düşmək
						<br />
						&#9679; BODRUM HOLIDAY RESORT 5★ (İçmeler) – 896 USD
						<br />
						&#9679; AZURE BY YELKEN HOTEL 5★ (Turgutreis) – 968 USD
						<br />
						&#9679; DUJA BODRUM 5★ (Torba) – 1015 USD
						<br />
						&#9679; KADIKALE RESORT HOTEL 5★ (Kadikale) - 1044 USD
						<br />
						&#9679; DUJA DIDIM 5★ (Didim) – 1055 USD
						<br />
						&#9679; LABRANDA TMT BODRUM RESORT 5★ (İçmeler) – 1105 USD
						<br />
						&#9679; LA BLANCHE RESORT & SPA 5★ (Turgutreis) – 1187 USD
						<br />
					</p>
				</div>
			</div>
		);
	};

	const renderSection3 = () => {
		return (
			<div className="listingSection__wrap">
				<div>
					<h2 className="text-2xl font-semibold">{td("includedInPrice")}</h2>
				</div>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
				{/* 6 */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
					{includes_demo
						.filter((_, i) => i < 12)
						.map((item) => (
							<div key={item.name} className="flex items-center space-x-3">
								<i className="las la-check-circle text-2xl" />
								<span>{item.name}</span>
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
		tour: "Bodrum turu",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Perform any additional form validation if needed

		// Send form data to your API endpoint
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
			/*       Qiymət
SNG – 215 AZN for one person in a single room
DBL – 362 AZN for two people in a double room */

			<div className="listingSectionSidebar__wrap shadow-xl">
				<p className="text-2xl font-semibold">{td("price")}</p>
				<div className="flex justify-between flex-col">
					<span className="text-lg font-medium">
						<span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
							{t("price")}
						</span>
					</span>
				</div>

				{/* FORM */}
				<form className="flex flex-col gap-4 border-neutral-200 dark:border-neutral-700 rounded-3xl">
					<label className="block">
						<Input
							placeholder="Ad, soyad"
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
							placeholder="Əlaqə nömrəsi"
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
							placeholder="bookandtravel@example.com"
							className="mt-1"
							value={formData.email}
							onChange={(e) =>
								setFormData({ ...formData, email: e.target.value })
							}
						/>
					</label>
					<label className="block">
						<Textarea
							placeholder="Əlavə qeydlər"
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
					{/* <SectionDateRange /> */}

					{/* {renderSection5()} */}
					{/* {renderSection6()} */}
					{/* {renderSection7()} */}
					{/* {renderSection8()} */}
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
