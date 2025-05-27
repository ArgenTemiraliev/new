"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import img650 from "../../../assents/image 650.png";
import Card from "../cards/Cards";

function Hero() {
  const { t, language } = useLanguage();
  const [venues, setVenues] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetch(`https://cp.sxodim.uz/api/venues?page=1&limit=20&lang=${language}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        const allVenues = data?.data || [];
        setVenues(allVenues);

        const recommendedVenues = allVenues.slice(0, 2);
        setRecommendation(recommendedVenues);
      })
      .catch((err) => {
        console.error("Ошибка при получении площадок:", err);
      });
  }, [language]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const isAllShown = visibleCount >= venues.length;

  return (
    <div className="hero py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Левый блок */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold mb-6 ml-2">{t("places")}</h1>

            {venues.slice(0, visibleCount).map((item, index) => (
              <Card
                key={item.id || index}
                item={{
                  id: item.id,
                  name: item.name || "Без названия",
                  img:item.image_url && item.image_url !== "null" ? item.image_url : "/fallback.png",
                  address: item.address || "Адрес неизвестен",
                  capacity: item.capacity || "Нет информации",  
                }}
                t={t}
              />
            ))}


            {!isAllShown && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-3 bg-green-100 text-green-800 font-semibold rounded-3xl hover:bg-green-600 hover:text-white transition duration-300 shadow-md" >
                  {t("loadMore")}
                </button>
              </div>
            )}
          </div>

          {/* Правый блок */}
          <div className="lg:w-1/3 mt-20">
            <Image
              src={img650}
              alt="Рекомендации"
              className="w-full rounded-xl"
            />
            <h2 className="text-lg font-bold mt-5">{t("recommended")}</h2>
            {recommendation.map((item, index) => (
            <Card
              key={item.id || index}
                    item={{
                  id:item.id,
                name: item.name || "Без названия",
                img:item.image_url && item.image_url !== "null" ? item.image_url : "/fallback.png",
                address: item.address || "Адрес неизвестен",
                capacity: item.capacity || "Нет информации",
              }}
              t={t}
            />
          ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
