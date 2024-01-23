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
import StayDatesRangeInput from "@/app/(listing-detail)/listing-experiences-detail/StayDatesRangeInput";
import GuestsInput from "@/app/(listing-detail)/listing-experiences-detail/GuestsInput";
import SectionDateRange from "@/app/(listing-detail)/SectionDateRange";
import { Route } from "next";
import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery";

import shusha1 from "@/images/tours/shusha/shusha1.webp";
import shusha2 from "@/images/tours/shusha/shusha2.webp";
import shusha3 from "@/images/tours/shusha/shusha3.webp";
import shusha4 from "@/images/tours/shusha/shusha4.webp";
import shusha5 from "@/images/tours/shusha/shusha5.webp";
import shusha6 from "@/images/tours/shusha/shusha6.webp";
import shusha7 from "@/images/tours/shusha/shusha7.webp";
import shusha8 from "@/images/tours/shusha/shusha8.webp";
import shusha9 from "@/images/tours/shusha/shusha9.webp";
import shusha10 from "@/images/tours/shusha/shusha10.webp";
import shusha11 from "@/images/tours/shusha/shusha11.webp";
import shusha12 from "@/images/tours/shusha/shusha12.webp";
import shusha13 from "@/images/tours/shusha/shusha13.webp";
import shusha14 from "@/images/tours/shusha/shusha14.webp";
import shusha15 from "@/images/tours/shusha/shusha15.webp";
import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";
import Label from "@/components/Label";
import Textarea from "@/shared/Textarea";

export type ListingExperiencesDetailPageProps = {};

const Page: FC<ListingExperiencesDetailPageProps> = ({}) => {
	const thisPathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const modal = searchParams?.get("modal");

	const PHOTOS: StaticImageData[] = [
		shusha8,
		shusha2,
		shusha1,
		shusha4,
		shusha5,
		shusha6,
		shusha7,
		shusha3,
		shusha9,
		shusha10,
		shusha11,
		shusha12,
		shusha13,
		shusha14,
		shusha15,
	];

	const includes_demo = [
		{ name: "Tur boyu bələdçi xidməti" },
		{ name: "Tur boyu nəqliyyat" },
		{ name: "1 gecə qonaqlama" },
		{ name: "1 dəfə oteldə səhər yeməyi" },
		// { name: "Halong Bay Entrance Ticket" },
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
					Şuşa turu
				</h2>

				{/* 3 */}
				<div className="flex items-center space-x-4">
					<span>
						<i className="las la-map-marker-alt"></i>
						<span className="ml-1"> Şuşa, Azərbaycan</span>
					</span>
				</div>

				{/* 5 */}
				<div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

				{/* 6 */}
				<div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
					<div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
						<i className="las la-hotel text-2xl"></i>
						<span className="">1 gecə</span>
					</div>
					<div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
						<i className="las la-coffee text-2xl"></i>
						<span className="">Səhər yeməyi</span>
					</div>
					{/* <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
            <i className="las la-plane-departure text-2xl"></i>
            <span className="">Air ticket</span>
          </div> */}
					<div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
						<i className="las la-shuttle-van text-2xl"></i>
						<span className="">Transfer</span>
					</div>
					<div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
						<i className="las la-user-circle text-2xl"></i>
						<span className="">Bələdçi xidməti</span>
					</div>
				</div>
			</div>
		);
	};

	const renderSection2 = () => {
		return (
			<div className="listingSection__wrap">
				<h2 className="text-2xl font-semibold">Tur proqrama daxildir</h2>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
				<div className="text-neutral-6000 dark:text-neutral-300">
					<p>
						&#9679; Füzuli rayonunda Anım Gününə həsr olunmuş xatirə lövhəsi və
						Füzuli şəhərinin mərkəzindəki dağıntılar ilə tanışlıq
						<br />
						&#9679; Molla Pənah Vaqifin muzey-məqbərə kompleksi
						<br />
						&#9679; Cıdır düzü
						<br />
						&#9679; Bülbülün ev-muzeyi
						<br />
						&#9679; Çuxur məhəlləsində yerləşən abidələr
						<br />
						&#9679; Yuxarı Gövhər Ağa məscidi
						<br />
						&#9679; Aşağı Gövhər Ağa məscidi
						<br />
						&#9679; Merdinli məhəlləsi
						<br />
						&#9679; Sadıqcanın evi
						<br />
						&#9679; “Güllələnmiş büstlər” olan meydan
						<br />
						&#9679; Xurşidbanu Natəvanın sarayı
						<br />
						&#9679; Şairənin vəsaiti hesabına inşa edilmiş bulaq
						<br />
						&#9679; Şuşa qalası
						<br />
						&#9679; Şuşa qalasının Gəncə qapısı və “Xarı Bülbül” simvolu
						<br />
						&#9679; Üzeyir Hacıbəylinin heykəli və Natəvan malikanəsinin ərazisi
						(tut bağı)
						<br />
						&#9679; Saatlı məscidi
						<br />
						&#9679; Xalça muzeyi
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
					<h2 className="text-2xl font-semibold">Qiymətə daxildir</h2>
					{/* <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
						Included in the price
					</span> */}
				</div>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
				{/* 6 */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
					{includes_demo
						.filter((_, i) => i < 12)
						.map((item) => (
							<div key={item.name} className="flex items-center space-x-3">
								<i className="las la-check-circle text-2xl"></i>
								<span>{item.name}</span>
							</div>
						))}
				</div>
			</div>
		);
	};

	const renderSection5 = () => {
		return (
			<div className="listingSection__wrap">
				{/* HEADING */}
				<h2 className="text-2xl font-semibold">Host Information</h2>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

				{/* host */}
				<div className="flex items-center space-x-4">
					<Avatar
						hasChecked
						hasCheckedClass="w-4 h-4 -top-0.5 right-0.5"
						sizeClass="h-14 w-14"
						radius="rounded-full"
					/>
					<div>
						<a className="block text-xl font-medium" href="##">
							Kevin Francis
						</a>
						<div className="mt-1.5 flex items-center text-sm text-neutral-500 dark:text-neutral-400">
							<StartRating />
							<span className="mx-2">·</span>
							<span> 12 places</span>
						</div>
					</div>
				</div>

				{/* desc */}
				<span className="block text-neutral-6000 dark:text-neutral-300">
					Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
					accommodation, an outdoor swimming pool, a bar, a shared lounge, a
					garden and barbecue facilities...
				</span>

				{/* info */}
				<div className="block text-neutral-500 dark:text-neutral-400 space-y-2.5">
					<div className="flex items-center space-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<span>Joined in March 2016</span>
					</div>
					<div className="flex items-center space-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
							/>
						</svg>
						<span>Response rate - 100%</span>
					</div>
					<div className="flex items-center space-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>

						<span>Fast response - within a few hours</span>
					</div>
				</div>

				{/* == */}
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
				<div>
					<ButtonSecondary href="/author">See host profile</ButtonSecondary>
				</div>
			</div>
		);
	};

	const renderSection6 = () => {
		return (
			<div className="listingSection__wrap">
				{/* HEADING */}
				<h2 className="text-2xl font-semibold">Reviews (23 reviews)</h2>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

				{/* Content */}
				<div className="space-y-5">
					<FiveStartIconForRate iconClass="w-6 h-6" className="space-x-0.5" />
					<div className="relative">
						<Input
							fontClass=""
							sizeClass="h-16 px-4 py-3"
							rounded="rounded-3xl"
							placeholder="Share your thoughts ..."
						/>
						<ButtonCircle
							className="absolute right-2 top-1/2 transform -translate-y-1/2"
							size=" w-12 h-12 "
						>
							<ArrowRightIcon className="w-5 h-5" />
						</ButtonCircle>
					</div>
				</div>

				{/* comment */}
				<div className="divide-y divide-neutral-100 dark:divide-neutral-800">
					<CommentListing className="py-8" />
					<CommentListing className="py-8" />
					<CommentListing className="py-8" />
					<CommentListing className="py-8" />
					<div className="pt-8">
						<ButtonSecondary>View more 20 reviews</ButtonSecondary>
					</div>
				</div>
			</div>
		);
	};

	const renderSection7 = () => {
		return (
			<div className="listingSection__wrap">
				{/* HEADING */}
				<div>
					<h2 className="text-2xl font-semibold">Location</h2>
					<span className="block mt-2 text-neutral-500 dark:text-neutral-400">
						San Diego, CA, United States of America (SAN-San Diego Intl.)
					</span>
				</div>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

				{/* MAP */}
				<div className="aspect-w-5 aspect-h-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0">
					<div className="rounded-xl overflow-hidden z-0">
						<iframe
							width="100%"
							height="100%"
							loading="lazy"
							allowFullScreen
							referrerPolicy="no-referrer-when-downgrade"
							src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY&q=Eiffel+Tower,Paris+France"
						></iframe>
					</div>
				</div>
			</div>
		);
	};

	const renderSection8 = () => {
		return (
			<div className="listingSection__wrap">
				{/* HEADING */}
				<h2 className="text-2xl font-semibold">Things to know</h2>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

				{/* CONTENT */}
				<div>
					<h4 className="text-lg font-semibold">Cancellation policy</h4>
					<span className="block mt-3 text-neutral-500 dark:text-neutral-400">
						Any experience can be canceled and fully refunded within 24 hours of
						purchase, or at least 7 days before the experience starts.
					</span>
				</div>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

				{/* CONTENT */}
				<div>
					<h4 className="text-lg font-semibold">Guest requirements</h4>
					<span className="block mt-3 text-neutral-500 dark:text-neutral-400">
						Up to 10 guests ages 4 and up can attend. Parents may also bring
						children under 2 years of age.
					</span>
				</div>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

				{/* CONTENT */}
				<div>
					<h4 className="text-lg font-semibold">What to bring</h4>
					<div className="prose sm:prose">
						<ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
							<li>
								Formal Wear To Visit Bai Dinh Pagoda Be ready before 7.30 Am.
							</li>
							<li>We will pick up from 07.30 to 08.00 AM</li>
						</ul>
					</div>
				</div>
			</div>
		);
	};

	const [formData, setFormData] = useState({
		name: "",
		phoneNumber: "",
		email: "",
		additionalNotes: "",
		tour: "Şuşa turu",
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
				<p className="text-2xl font-semibold">Qiymət</p>
				<div className="flex justify-between flex-col">
					<span className="text-lg font-medium">
						215 AZN
						<span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
							bir nəfərlik otaqda bir nəfər üçün
						</span>
					</span>
					<span className="text-lg font-medium">
						362 AZN
						<span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
							iki nəfərlik otaqda iki nəfər üçün
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
				<ButtonPrimary onClick={handleSubmit}>Bron etmək</ButtonPrimary>
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
						<div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
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
