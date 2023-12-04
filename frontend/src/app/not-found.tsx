import React from "react";
// import I404Png from "@/images/404.png";
// import Image from "next/image";
// import ButtonPrimary from "@/shared/ButtonPrimary";
import { getI18n } from "locales/server";

export default async function NotFound() {
  const t = await getI18n();
  return <>Not Found {t("hero")}</>
}
