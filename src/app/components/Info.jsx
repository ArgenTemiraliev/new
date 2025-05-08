'use client'

import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import places1 from "../../../assents/places1.png"
import { useLanguage } from "../contaxt/LanguageContext"; // Импорт контекста


// Динамический импорт карты (отключаем SSR)
const Map = dynamic(() => import('./Map'), { ssr: false });

function Info() {
  const { t } = useLanguage(); // Получаем функцию перевода

  return (
    <>
      <div className="">
        <div className="container mx-auto p-10">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden pt-4 mt-8 transition hover:scale-[1.01] duration-300">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[95%] h-[300px]">
                <Image
                  src={places1}
                  alt={`Фото `}
                  className="w-full h-full object-cover rounded-3xl "
                  priority
                />
              </div>
            </div>
            <h2 className="text-2xl px-5 py-4 font-semibold">HUMO Arena город Ташкент</h2>
            <ul className="flex flex-col sm:flex-row sm:gap-6 px-5">
              <li className="sm:w-1/3 mb-4">
                <h3 className="text-lg font-medium">{t("seats") }</h3>
                <span className="text-gray-600">12,500</span>
              </li>
              <li className="sm:w-2/3 mb-4">
                <h3 className="text-lg font-medium">{t("address") }</h3>
                <span className="text-gray-600"> {t("location")}
                </span>
              </li>
            </ul>
            <div className="px-5 pb-6">
              <button className="w-full mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-3xl hover:bg-green-700 transition duration-300">
                {t("buy")}
              </button>
            </div>

            <div className="text pb-10">
              <h2 className="text-2xl px-5 py-4 font-semibold">HUMO Arena г.Ташкент</h2>
              <p className='px-7'>{t("humoDescription1")}              </p>
              <p className='px-7'> { t("humoDescription2")}</p>
              <p className='px-7'>{t("humoDescription3")} </p>
            </div>
              <div className="px-5 pb-6">
                <Map />
              </div>
          </div>
              <div className="similar ">
          <div className="">
            <h2 className="text-2xl px-5 py-4 font-semibold" >{t("similarPlaces")} </h2>
          </div>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden pt-4 mt-8 transition hover:scale-[1.01] duration-300">
                    <div className="flex justify-center">
                      <div className="relative w-full max-w-[95%] h-[300px]">
                        {/* фиксированная высота */}
                        <Image
                          src={places1}
                          alt={`Фото `}
                          className="w-full h-full object-cover rounded-3xl "
                          priority
                        />
                      </div>
                    </div>
                    <h2 className="text-2xl px-5 py-4 font-semibold">Дворец международных форумов Узбекистан</h2>
                    <ul className="flex flex-col sm:flex-row sm:gap-6 px-5">
                      <li className="sm:w-1/3 mb-4">
                        <h3 className="text-lg font-medium">{t("seats") }</h3>
                        <span className="text-gray-600">3,500</span>
                      </li>
                      <li className="sm:w-2/3 mb-4">
                        <h3 className="text-lg font-medium">{t("address") }</h3>
                        <span className="text-gray-600">
                        {t("location")}                      </span>
                      </li>
                    </ul>
                    <div className="px-5 pb-6">
                      <button className="w-full mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-3xl hover:bg-green-700 transition duration-300">
                      {t("buy")}
                      </button>
                    </div>
                  </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default Info
