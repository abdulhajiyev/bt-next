// pages/tours/[id].js
"use client"

import { useScopedI18n } from "locales/client";

const Page = ({ params }: { params: { slug: string } }) => {
  const t = useScopedI18n("tours");
  
  const TOURS = {
    "tours": [
      {
        "id": "doha",
        "title": t("abroad.doha.name"),
        "description": t("abroad.doha.description"),
      },
    ]
  };
  
  const tourData = TOURS.tours.find(tour => tour.id === params.slug);

  if (!tourData) {
    return <div>Tour not found</div>;
  }

  return (
    <div>
      <h1>{tourData.title}</h1>
      <h2>{tourData.description}</h2>
    </div>
  );
};

export default Page;
