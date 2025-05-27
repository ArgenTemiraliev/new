'use client'

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import places1 from "../../../assents/places1.png";
import { useLanguage } from "../../context/LanguageContext";
import { numbers } from "../../utils/contacts";

// Отключаем SSR для карты
const Map = dynamic(() => import("../map/Map"), { ssr: false });

// Тип для телефонных номеров

function Info({item  }) {
  const { t } = useLanguage();
                       
  // Обработчик кнопки "Купить"
  const handleBuyClick = () => {
    alert(t("buyClicked") || "Покупка пока недоступна");
  };

  return (
    <div>
      <div className="container mx-auto p-5">
        {/* Основной блок с площадкой */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden pt-4 mt-8 transition hover:scale-[1.01] duration-300">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[95%] h-[300px]">
            {item.img ? (
              <Image
                src={item.img}
                alt={t(item.name) || "Фото площадки"}
                className="w-full h-full object-cover rounded-3xl"
                priority
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-3xl border-2 border-dashed border-gray-400 text-gray-500 cursor-pointer hover:bg-gray-200 transition">
                <span className="text-4xl">+</span>
                <span className="mt-2 text-sm">{t("addPhoto") || "Добавить фото"}</span>
              </div>
            )}
            </div>
          </div>

          <h2 className="text-2xl px-5 py-4 font-semibold">{t(item.name)}</h2>

          <ul className="flex flex-col sm:flex-row sm:gap-6 px-5">
            <li className="sm:w-1/3 mb-4">
              <h3 className="text-lg font-medium">{t("seats")}</h3>
              <span className="text-gray-600">{item.capacity}</span>
            </li>
            <li className="sm:w-2/3 mb-4">
              <h3 className="text-lg font-medium">{t("address")}</h3>
              <span className="text-gray-600">{t(item.address)}</span>
            </li>
          </ul>

          <div className="px-5 pb-6">
            <button
              onClick={handleBuyClick}
              className="w-full mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-3xl hover:bg-green-700 transition duration-300">
              {t("buy")}
            </button>
          </div>

          <div className="text pb-10">
            <h2 className="text-xl px-5 py-4 font-semibold">{t(item.name)}</h2>
            <p className="px-7">{t(item.name) + " " + t("humoDescription1")}</p>
            <p className="px-7">{t("humoDescription2")}</p>
            <p className="px-7">{t(item.name) + " " + t("humoDescription3")}</p>
            </div>

          <div className="px-5 pb-6">
            <Map />
          </div>
        </div>

        {/* Блок похожих мест */}
        <div className="similar">
          <h2 className="text-2xl px-5 py-4 mt-5 font-semibold">{t("similarPlaces")}</h2>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden pt-4 mt-8 transition hover:scale-[1.01] duration-300">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[95%] h-[300px]">
               {item.img ? (  <Image src={item.img} alt={t(item.name) || "Фото площадк"} className="w-full h-full object-cover rounded-3xl" priority  />
              ) : (
                <div>indefinite</div>
              )}
              </div>
            </div>

            <h2 className="text-2xl px-5 py-4 font-semibold">{t(item.name)}</h2>

            <ul className="flex flex-col sm:flex-row sm:gap-6 px-5">
              <li className="sm:w-1/3 mb-4">
                <h3 className="text-lg font-medium">{t("telefon")}</h3>
                <span className="text-gray-600">{numbers?.[1]?.phone ?? "—"}</span>
              </li>
              <li className="sm:w-2/3 mb-4">
                <h3 className="text-lg font-medium">{t("mobil")}</h3>
                <span className="text-gray-600">{numbers?.[2]?.mobil ?? "—"}</span>
              </li>
            </ul>

            <div className="px-5 pb-6">
              <button
                onClick={handleBuyClick}
                className="w-full mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-3xl hover:bg-green-700 transition duration-300" >
                {t("buy")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
