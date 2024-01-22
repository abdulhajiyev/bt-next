// locales/client.ts
"use client";
import { createI18nClient } from "next-international/client";

export const {
	useI18n,
	useScopedI18n,
	I18nProviderClient,
	useChangeLocale,
	useCurrentLocale,
} = createI18nClient({
	az: () => import("./az"),
	ru: () => import("./ru"),
	en: () => import("./en"),
});
