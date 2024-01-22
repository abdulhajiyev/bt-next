"use client";
import React, { FC } from "react";
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
							<form className="grid grid-cols-1 gap-6" action="#" method="post">
								<label className="block">
									<Label>{t("contact.fullName")}</Label>

									<Input placeholder="Name" type="text" className="mt-1" />
								</label>
								<label className="block">
									<Label>{t("contact.emailAddress")}</Label>

									<Input
										type="email"
										placeholder="bookandtravel@example.com"
										className="mt-1"
									/>
								</label>
								<label className="block">
									<Label>{t("contact.message")}</Label>

									<Textarea className="mt-1" rows={6} />
								</label>
								<div>
									<ButtonPrimary type="submit">
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
