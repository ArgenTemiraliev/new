import React from 'react'
import Link from 'next/link';

import Image from 'next/image'
import place1 from "../../../assents/places1.png";
import place2 from "../../../assents/places2.png";
import place3 from "../../../assents/places3.png";
import place4 from "../../../assents/places4.png";
import img650 from "../../../assents/image 650.png";







const information = [
  { name: "Дворец международных форумов Узбекистан", img: place1 },
  { name: " HUMO Arena " , img: place2 },
  { name: "Дворец Дружбы Народов", img: place3 },
  { name: "Дворец Творчества Молодежи", img: place4 },
];

const recommendation = [
  { name: "HUMO Arena", img: place2 },
  { name: "HUMO Arena", img: place3 },
];

function Card({ item }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden pt-4 mt-8 transition hover:scale-[1.01] duration-300">
      <div className="flex justify-center">
        <div className="relative w-full max-w-[95%] h-[300px]">
          {/* фиксированная высота */}
          <Image
            src={item.img}
            alt={`Фото ${item.name}`}
            className="w-full h-full object-cover rounded-3xl "
            priority
          />
        </div>
      </div>
      <h2 className="text-2xl px-5 py-4 font-semibold">{item.name}</h2>
      <ul className="flex flex-col sm:flex-row sm:gap-6 px-5">
        <li className="sm:w-1/3 mb-4">
          <h3 className="text-lg font-medium">Количество мест</h3>
          <span className="text-gray-600">3,500</span>
        </li>
        <li className="sm:w-2/3 mb-4">
          <h3 className="text-lg font-medium">Адрес</h3>
          <span className="text-gray-600">
            Улица Тоголок Молдо, 40. Первомайский район, Бишкек, 720001.
          </span>
        </li>
      </ul>
      
      <div className="px-5 pb-6">
        <button className="w-full mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-3xl hover:bg-green-700 transition duration-300">
          Купить билеты
        </button>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Block */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-6 ml-2">Места</h1>
            {information.map((item, index) => (
              <Card key={index} item={item} />
            ))}
            <div className="flex justify-center mt-8">
              <button className="px-6 py-3 bg-green-100 text-green-800 font-semibold rounded-3xl hover:bg-green-600 hover:text-white transition duration-300 shadow-md">
                Загрузить ещё
              </button>
            </div>
          </div>

          {/* Right Block */}
          <div className="lg:w-1/3 mt-20">
            <Image src={img650} alt="Рекомендации" className="w-full  rounded-xl" />
            <h2 className="text-xl font-bold mb-4 ml-2">Рекомендуемые площадки</h2>
            {recommendation.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
