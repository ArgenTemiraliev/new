'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../assents/logo.png'
import { useLanguage } from "../contaxt/LanguageContext"; // Исправь путь

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

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17.927 17.927 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.05l-2.23 2.23z" />
    </svg>
  );

  return (
    <header className="bg-[#319E47] py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          
          {/* Логотип */}
          <div className="flex-shrink-0">
            <a href="/">
              <Image src={logo} alt="Логотип" className="w-28 h-auto" />
            </a>
          </div>

          {/* Телефон */}
          <div className="text-white text-base md:text-lg flex items-center gap-2">
            <a href="https://wa.me/998712004040" className="flex items-center decoration-[none] gap-1 hover:underline">
              <PhoneIcon />
              <span>+998 71 200 40 40</span>
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
                  className="w-full px-2 py-1 text-left hover:bg-green-100">Русский</button>
                <button
                  onClick={() => changeLanguage('uz')}
                  className="w-full px-2 py-1 text-left hover:bg-green-100">Ўзбекча</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
