"use client"; // добавляем директиву, чтобы компонент был клиентским

import { useLanguage } from "../../context/LanguageContext"; // Импорт контекста
import Image from "next/image";
import sxodim from "../../../assents/sxodim-logo.png";
import humo from "../../../assents/humo-footer.svg fill.png";
import uzcard from "../../../assents/uzcard.svg fill.png";
import visa from "../../../assents/visa.svg fill.png";
import mastercard from "../../../assents/mastercard.svg fill.png";
import playmarket from "../../../assents/LinkPlaymarket.png";
import appstore from "../../../assents/Link → app store.png";
import instagram from "../../../assents/Link → Instagram.png"; 
import telegram from "../../../assents/Link → telegramFooter.png";
import facebook from "../../../assents/Link → facebookFooter.png";
import { numbers } from "../../utils/contacts"
import {links} from "../../utils/links"


function Footer() {
    const { t } = useLanguage(); // Получаем функцию перевода

    return (
        <footer className="bg-[#dbe7dd] text-black py-10">
            <div className="container mx-auto px-6 ">
                <div className="flex items-center gap-3 mb-6">
                    <Image src={sxodim} alt="sxodim logo" width={100} height={100} />
                    <p className="text-l text-gray-500">  {t("footerDescription")}</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div className="flex-1 flex flex-col justify-between">
                        <div className="w-80 text-sm space-y-2 text-gray-500">
                            <p className="py-6">{t("footerTicketPurchase")}</p>
                            <p>{t("footerSimpleSystem")}</p>
                        </div>
                        <p className="text-xl mt-4">&copy; OOO «BUY TICKET» {new Date().getFullYear()}</p>
                    </div>
                    <div className="flex-1 grid grid-cols-2 text-xs">
                        <div className="flex flex-col gap-2">
                            <a href="#">{t("about")}</a>
                            <a href="#">{t("publicOffer")}</a>
                            <a href="mailto:info@sxodim.uz" className="text-gray-500">info@sxodim.uz</a>
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <a href="#">{t("purchaseGuide")}</a>
                            <a href="#">{t("faq")}</a>
                            <a href="#">{t("terms")}</a>
                        </div>
                        <div className="col-span-2">
                            <p>{t("location")}</p>
                        </div>

                        <div className="flex items-center gap-4 col-span-2 mt-2">
                            <Image src={humo} alt="Humo" width={40} height={25} />
                            <Image src={uzcard} alt="Uzcard" width={40} height={25} />
                            <Image src={visa} alt="Visa" width={40} height={25} />
                            <Image src={mastercard} alt="Mastercard" width={40} height={25} />
                        </div>

                        <p className="text-xl font-semibold col-span-2 mt-4">{numbers[0].number }</p>
                    </div>

                    {/* Правый блок */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12 p-4">
                        {/* <div className="flex-shrink-0">
                            <Image src={vektor} alt="QR Phone" width={150} height={150} />
                        </div> */}
                        <div className="text-center lg:text-left">
                            <div className="mb-4">
                                <h2 className="text-base font-semibold mb-2">{t("appTitle")}</h2>
                            </div>
                            <div className="flex flex-col items-center lg:items-start gap-2 mb-4">
                                <a href={links.googlePlay}>
                                    <Image src={playmarket} alt="Google Play" width={140} height={40} />
                                </a>
                                <a href={links.appStore}>
                                    <Image src={appstore} alt="App Store" width={140} height={40} />
                                </a>
                            </div>
                            <div className="flex gap-4 justify-center lg:justify-start">
                                <a href={links.instagramSxodimUz}><Image src={instagram} alt="Instagram" width={24} height={24} /></a>
                                <a href={links.telegramSxodimUz}><Image src={telegram} alt="Telegram" width={24} height={24} /></a>
                                <a href={links.facebookSxodimUz}><Image src={facebook} alt="Facebook" width={24} height={24} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
