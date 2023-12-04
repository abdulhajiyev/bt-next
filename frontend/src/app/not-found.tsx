import React from "react";
// import I404Png from "@/images/404.png";
// import Image from "next/image";
// import ButtonPrimary from "@/shared/ButtonPrimary";
import { getScopedI18n } from "locales/server";

export default async function NotFound() {
  const t = await getScopedI18n("hello");
  return <>Not Found {t("world")}</>
}
