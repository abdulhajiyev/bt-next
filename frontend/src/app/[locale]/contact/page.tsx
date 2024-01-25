"use client";
import React, { FC, useState } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SocialsList from "@/shared/SocialsList";
import Label from "@/components/Label";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { useScopedI18n } from "locales/client";

export type PageContactProps = {};

const PageContact = ({ params }: { params: { slug: string } }) => {
	const t = useScopedI18n("footer");
	const info = [
		{
			title: `🗺 ${t("contact.address")}`,
			desc: `Baku city, Aşıq Ali, 4, Narimanov, AZ1072 "Sheher Baghları" residence.`,
			link: "https://goo.gl/maps/bXFhQFutRBwkWbCM7",
		},
		{
			title: `💌 ${t("contact.email")}`,
			desc: "info@bookandtravel.com",
			link: "mailto:info@bookandtravel.com",
		},
		{
			title: `☎ ${t("contact.phone")}`,
			desc: "+994502009999",
			link: "tel:+994502009999",
		},
	];

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		additionalNotes: "",
	});

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

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

	return (
		<div className={"nc-PageContact overflow-hidden"}>
			<div className="mb-24 lg:mb-32">
				<h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
					{t("contact.contact")}
				</h2>
				<div className="container max-w-7xl mx-auto">
					<div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
						<div className="max-w-sm space-y-8">
							{info.map((item, index) => (
								<div key={index}>
									<h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
										{item.title}
									</h3>
									{item.link ? (
										<a
											href={item.link}
											className="hover:underline block mt-2 text-neutral-500 dark:text-neutral-400"
										>
											{item.desc}
										</a>
									) : (
										<p className="block mt-2 text-neutral-500 dark:text-neutral-400">
											{item.desc}
										</p>
									)}
								</div>
							))}
							<div>
								<h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
									🌏 {t("contact.socials")}
								</h3>
								<SocialsList className="mt-2" />
							</div>
						</div>
						<div>
							<form
								className="grid grid-cols-1 gap-6"
								action="#"
								method="post"
								onSubmit={handleSubmit}
							>
								<label className="block">
									<Label>{t("contact.fullName")}</Label>
									<Input
										name="name"
										placeholder="Name"
										type="text"
										className="mt-1"
										value={formData.name}
										onChange={handleInputChange}
									/>
								</label>
								<label className="block">
									<Label>{t("contact.emailAddress")}</Label>
									<Input
										name="email"
										type="email"
										placeholder="bookandtravel@example.com"
										className="mt-1"
										value={formData.email}
										onChange={handleInputChange}
									/>
								</label>
								<label className="block">
									<Label>{t("contact.message")}</Label>
									<Textarea
										name="additionalNotes"
										className="mt-1"
										rows={6}
										value={formData.additionalNotes}
										onChange={handleInputChange}
									/>
								</label>
								<div>
									<ButtonPrimary onClick={handleSubmit} type="submit">
										{t("contact.send")}
									</ButtonPrimary>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageContact;
