import Image from "next/image";
import sxodim from "../../../assents/sxodim-logo.png";
import humo from "../../../assents/humo-footer.svg fill.png";
import uzcard from "../../../assents/uzcard.svg fill.png";
import visa from "../../../assents/visa.svg fill.png";
import mastercard from "../../../assents/mastercard.svg fill.png";
import qrphone from "../../../assents/qrphone.png";
import playmarket from "../../../assents/LinkPlaymarket.png";
import appstore from "../../../assents/Link → app store.png";
import instagram from "../../../assents/Link → Instagram.png"; // добавь иконки соцсетей
import telegram from "../../../assents/Link → telegramFooter.png";
import facebook from "../../../assents/Link → facebookFooter.png";

function Footer() {
    return (
        <footer className="bg-[#dbe7dd] text-black py-10">
            <div className="container mx-auto px-6 ">
                <div className="flex items-center gap-3 mb-6">
                    <Image src={sxodim} alt="sxodim logo" width={100} height={100} />
                    <p className="text-sm">  — самый удобный способ выбрать, как провести свободное время </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                <div className="flex-1 flex flex-col justify-between">
                    <div className="text-x space-y-2 pt-10 ">
                            <p className="py-6">Покупка билетов на мероприятия
                                для вашего удовольствия.</p>
                        <p>Простая и удобная система, круглосуточная поддержка.</p>
                    </div>
                    <p className="text-x mt-4">&copy; OOO «BUY TICKET» {new Date().getFullYear()}</p>
                    </div>
                    <div className="flex-1 grid grid-cols-2 text-sm">
                      <div className="flex flex-col gap-2">
                            <a href="#">О компании</a>
                            <a href="#">Публичная оферта</a>
                            <a href="mailto:info@sxodim.uz">info@sxodim.uz</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="#">Инструкция по покупке</a>
                            <a href="#">Вопросы и ответы</a>
                            <a href="#">Условия и положения</a>
                        </div>
                        <div className="col-span-2">
                            <p>г.Ташкент, М.Улугбекский район, ул.Мустакиллик, 29-7</p>
                        </div>

                            <div className="flex items-center gap-4 col-span-2 mt-2">
                            <Image src={humo} alt="Humo" width={40} height={25} />
                            <Image src={uzcard} alt="Uzcard" width={40} height={25} />
                            <Image src={visa} alt="Visa" width={40} height={25} />
                            <Image src={mastercard} alt="Mastercard" width={40} height={25} />
                        </div>

                        <p className="text-2xl font-semibold col-span-2 mt-4">+998 71 200 40 40</p>
                    </div>
                    
                 {/* Правый блок */}
                <Image src={qrphone} alt="QR Phone" width={150} height={150} />
                    <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-right">
                    <div className="mb-4">
                        <h2 className="text-base font-semibold mb-2">Развлечение в твоём телефоне</h2>
                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <a href="#">
                        <Image src={playmarket} alt="Google Play" width={140} height={40} />
                        </a>
                        <a href="#">
                        <Image src={appstore} alt="App Store" width={140} height={40} />
                        </a>
                    </div>
                    <div className="flex gap-4 justify-center lg:justify-end">
                        <a href="#"><Image src={instagram} alt="Instagram" width={24} height={24} /></a>
                        <a href="#"><Image src={telegram} alt="Telegram" width={24} height={24} /></a>
                        <a href="#"><Image src={facebook} alt="Facebook" width={24} height={24} /></a>
                    </div>
                </div>
                </div> 
            </div>
      </footer>
);
}

export default Footer;
// <footer className="bg-[#dbe7dd] text-black py-10">
//   <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10">
//           <div>
              
//       <div className="flex items-center gap-3 mb-6">
//         <Image src={sxodim} alt="sxodim logo" width={100} height={100} />
//         <p className="text-sm">
//           — самый удобный способ выбрать, как провести свободное время
//         </p>
//       </div>
//     </div>
//     {/* Левый блок */}
//     <div className="flex-1 flex flex-col justify-between">
//       <div className="text-sm space-y-2">
//         <p>Покупка билетов на мероприятия для вашего удовольствия.</p>
//         <p>Простая и удобная система, круглосуточная поддержка.</p>
//       </div>
//       <p className="text-xs mt-4">&copy; OOO «BUY TICKET» {new Date().getFullYear()}</p>
//     </div>

//     {/* Центр: ссылки и инфо */}
//     <div className="flex-1 grid grid-cols-2 gap-4 text-sm">
//       <div className="flex flex-col gap-2">
//         <a href="#">О компании</a>
//         <a href="#">Публичная оферта</a>
//         <a href="mailto:info@sxodim.uz">info@sxodim.uz</a>
//       </div>
//       <div className="flex flex-col gap-2">
//         <a href="#">Инструкция по покупке</a>
//         <a href="#">Вопросы и ответы</a>
//         <a href="#">Условия и положения</a>
//       </div>
//       <div className="col-span-2">
//         <p>г.Ташкент, М.Улугбекский район, ул.Мустакиллик, 29-7</p>
//       </div>

//       <div className="flex items-center gap-4 col-span-2 mt-2">
//         <Image src={humo} alt="Humo" width={40} height={25} />
//         <Image src={uzcard} alt="Uzcard" width={40} height={25} />
//         <Image src={visa} alt="Visa" width={40} height={25} />
//         <Image src={mastercard} alt="Mastercard" width={40} height={25} />
//       </div>

//       <p className="text-lg font-semibold col-span-2 mt-4">+998 71 200 40 40</p>
//     </div>
//     {/* Правый блок */}
//    <Image src={qrphone} alt="QR Phone" width={150} height={150} />
//     <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-right">
//      <div className="mb-4">
//         <h2 className="text-base font-semibold mb-2">Развлечение в твоём телефоне</h2>
//     </div>
//     <div className="flex flex-col gap-2 mb-4">
//         <a href="#">
//         <Image src={playmarket} alt="Google Play" width={140} height={40} />
//         </a>
//         <a href="#">
//         <Image src={appstore} alt="App Store" width={140} height={40} />
//         </a>
//     </div>
//     <div className="flex gap-4 justify-center lg:justify-end">
//         <a href="#"><Image src={instagram} alt="Instagram" width={24} height={24} /></a>
//         <a href="#"><Image src={telegram} alt="Telegram" width={24} height={24} /></a>
//         <a href="#"><Image src={facebook} alt="Facebook" width={24} height={24} /></a>
//     </div>

//     </div>

//   </div>
// </footer>
