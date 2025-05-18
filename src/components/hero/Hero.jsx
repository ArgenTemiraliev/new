"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import place1 from "../../../assents/places1.png";
import place2 from "../../../assents/places2.png";
import place3 from "../../../assents/places3.png";
import place4 from "../../../assents/places4.png";
import img650 from "../../../assents/image 650.png";
import Card from "../cards/Cards";

const information = [
  { name: "uzbekistanForumPalace" , img: place1 },
  { name: "humoArena", img: place2 },
  { name: "friendshipPalace", img: place3 },
  { name: "humoArena", img: place2 },
  { name: "uzbekistanForumPalace" , img: place1 },
  { name: "youthCreativityPalace", img: place4 },

];

const recommendation = [
  { name: "humoArena", img: place2 },
  { name: "friendshipPalace", img: place3 },
  { name: "uzbekistanForumPalace" , img: place1 },
  { name: "youthCreativityPalace", img: place4 },
];

function Hero() {
  const { t } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const isAllShown = visibleCount >= information.length;

  return (
    <div className="hero py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Левый блок */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold mb-6 ml-2">{t("places")}</h1>

            {information.slice(0, visibleCount).map((item, index) => (
              <Card key={index} item={item} t={t} />
            ))}

            {!isAllShown && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-3 bg-green-100 text-green-800 font-semibold rounded-3xl hover:bg-green-600 hover:text-white transition duration-300 shadow-md"
                >
                  {t("loadMore")}
                </button>
              </div>
            )}
          </div>

          {/* Правый блок */}
          <div className="lg:w-1/3 mt-20">
            <Image src={img650} alt="Рекомендации" className="w-full rounded-xl" />
            <h2 className="text-lg font-bold mt-5 ">{t("recommended")}</h2>
            {recommendation.map((item, index) => (
              <Card key={index} item={item} t={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
