'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../assents/logo.png'
import { useLanguage } from "../../context/LanguageContext"; // Исправь путь
import { numbers } from "../../utils/contacts"
import { PhoneIcon } from "../../utils/icons"
import {links} from "../../utils/links"

export default function Header() {
  const { t, setLanguage, language } = useLanguage();  // Используем значения из контекста
  const [lang, setLang] = useState(language); // Начальный язык из контекста
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (selectedLang) => {
    setLang(selectedLang);
    setIsDropdownOpen(false);
    setLanguage(selectedLang);  // Смена языка через контекст
    console.log(`Выбран язык: ${selectedLang}`);
  };

  

  return (
    <header className="bg-[#319E47] py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          
          {/* Логотип */}
          <div className="flex-shrink-0">
            <a href={links.home}>
              <Image src={logo} alt="Логотип" className="w-28 h-auto" />
            </a>
          </div>

          {/* Телефон */}
          <div className="text-white text-base md:text-lg flex items-center gap-2">
            <a href={links.whatspp} className="flex items-center decoration-[none] gap-1 hover:underline">
              <PhoneIcon />
              <span>{ numbers[0].number}</span>
            </a>
          </div>

          {/* Язык (выпадающее меню) */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white text-lg px-2 py-1 rounded hover:underline text-green-700 font-bold">
              {lang === 'ru' ? '🇷🇺' : '🇺🇿'}
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white rounded shadow-md z-10">
                <button
                  onClick={() => changeLanguage('ru')}
                  className="w-full px-2 py-1 text-left hover:bg-green-100">{t("rus") }</button>
                <button
                  onClick={() => changeLanguage('uz')}
                  className="w-full px-2 py-1 text-left hover:bg-green-100">{t("uzb") }</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
