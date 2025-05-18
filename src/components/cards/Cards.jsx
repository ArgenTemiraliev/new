"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { quantity } from "../../utils/placeQuantity"
import { links } from "../../utils/links"


function Card({ item, t }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden pt-4 mt-8 transition hover:scale-[1.01] duration-300">
      <div className="flex justify-center">
        <div className="relative w-full max-w-[95%] h-[300px]">
          <Image
            src={item.img}
            alt={`Фото ${item.name}`}
            className="w-full h-full object-cover rounded-3xl"
            priority
          />
        </div>
      </div>
      <h2 className="text-xl px-5 py-4 font-semibold">{t(item.name)}</h2>
      <ul className="flex flex-col sm:flex-row sm:gap-6 px-5">
        <li className="sm:w-1/3 mb-4">
          <h3 className="text-base font-medium">{t("seats")}</h3>
                  <span className="text-gray-600"> {quantity?.[0]?.cardPlace || "—"}</span>
        </li>
        <li className="sm:w-2/3 mb-4">
          <h3 className="text-base font-medium">{t("address")}</h3>
          <span className="text-gray-600">{t("location")}</span>
        </li>
      </ul>
      <div className="px-5 pb-6">
        <Link href={links.tickets}>
          <button className="w-full mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-3xl hover:bg-green-700 transition duration-300">
            {t("buy")}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
