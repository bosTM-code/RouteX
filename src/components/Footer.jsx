import { Link } from "react-router-dom";
import GlobeIcon from "../assets/Globe.svg";
import WalletIcon from "../assets/Wallet.svg";
import CheckGreen from "../assets/CheckGreen.svg";
import ArrowGreen from "../assets/ArrowGreen.svg";
import LogoGreen from "../assets/LogoGreen.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import X from "../assets/X.svg";
import Telegram from "../assets/Telegram.svg";
import Map from "../assets/Map.svg";

const services = [
  { text: "Стратегічні сесії для бізнесу", link: "" },
  { text: "Аудит бізнес-процесів", link: "" },
  { text: "Юридичний супровід релокації", link: "" },
  { text: "Податкове планування", link: "" },
];

const links = [
  { text: "Останні новини блогу", link: "/RouteX/blog" },
  { text: "Вакансії", link: "/RouteX/team" },
  { text: "Загальні запитання", link: "/RouteX/faq" },
  { text: "Кейси клієнтів", link: "/RouteX/success-story" },
];

export default function Footer() {
  return (
    <footer className="bg-darkGreen text-sm">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 py-12">
          {/* CTA #1 */}
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-lightGreen flex items-center justify-center shrink-0">
              <img
                src={WalletIcon}
                alt="Іконка фінансової підтримки"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-white font-bold text-2xl sm:text-3xl leading-snug">
              Потрібна допомога з візою або консалтингом для бізнесу?
            </h3>
          </div>

          {/* CTA #2 */}
          <div className="flex items-start gap-6 md:border-l md:border-white/10 md:pl-8">
            <div className="w-20 h-20 rounded-full bg-lightGreen flex items-center justify-center shrink-0">
              <img src={GlobeIcon} alt="Іконка глобусу" className="w-10 h-10" />
            </div>
            <h3 className="text-white font-bold text-2xl sm:text-3xl leading-snug">
              Готові розпочати релокацію чи масштабування бізнесу?
            </h3>
          </div>
        </div>

        {/*full-width divider */}
        <div className="w-screen border-t border-white/10 relative left-1/2 right-1/2 -ml-[50vw]" />
        <div className="relative z-0">
          {/* Main footer grid */}
          <div>
            <img
              src={Map}
              alt="Карта світу фон"
              className="absolute inset-0 z-0
               w-full h-full object-cover opacity-60 pointer-events-none"
            />
            <div className="relative z-10 grid gap-12 pt-16 pb-24 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-center">
              {/* Column 1: Logo + text + socials */}
              <div>
                <img
                  src={LogoGreen}
                  alt="RouteX Consulting логотип"
                  className="w-40 mb-6"
                />
                <p className="text-gray-300 text-sm mb-6 max-w-xs">
                  RouteX Consulting — консалтинговий центр, який допомагає
                  підприємцям та спеціалістам з питань релокації, відкриття
                  компаній за кордоном та податкового планування.
                </p>
                <div className="flex gap-6 text-white">
                  <a
                    href="https://www.facebook.com/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Facebook} alt="Іконка Facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Instagram} alt="Іконка Інстаграм" />
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    aria-label="X/Twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={X} alt="Іконка Твітер" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedIn} alt="Іконка Linkedin" />
                  </a>
                </div>
              </div>

              {/* Column 2: Services */}
              <div>
                <h4 className="text-white font-semibold mb-5">Послуги</h4>
                <div className="space-y-3 text-gray-300 text-sm">
                  {services.map((item) => (
                    <a
                      key={item.text}
                      href={item.link || "#"}
                      className="block"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={CheckGreen}
                          alt="Позначка"
                          className="w-4 h-4"
                        />
                        {item.text}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 3: Useful Link */}
              <div>
                <h4 className="text-white font-semibold mb-5">
                  Корисні посилання
                </h4>
                <div className="space-y-3 text-gray-300 text-sm">
                  {links.map((item) => (
                    <a
                      key={item.text}
                      href={item.link || "#"}
                      className="block"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={ArrowGreen}
                          alt="Стрілка"
                          className="w-4 h-4"
                        />
                        {item.text}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 4: Subscribe to Newsletter */}
              <div>
                <h4 className="text-white font-semibold mb-5">
                  Підписка на оновлення
                </h4>
                <p className="text-gray-300 text-sm mb-4 max-w-xs">
                  Отримуйте оновлення про зміни в міграційному законодавстві та
                  нові можливості для бізнесу.
                </p>
                <form
                  className="flex overflow-hidden max-w-sm"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Ваша e-mail адреса"
                    className="flex-1 px-5 py-3 text-sm bg-black/80 text-white placeholder-gray-400 focus:outline-none rounded-full"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-lightGreen text-white p-4 rounded-full shrink-0 -translate-x-9 hover:bg-green-500 transition"
                    aria-label="Підписатися"
                  >
                    <img src={Telegram} alt="Надіслати" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/*full-width divider before bottom bar */}
          <div className="w-screen border-t border-white/10 relative left-1/2 right-1/2 -ml-[50vw]" />

          {/* Bottom bar */}
          <div className="py-6 flex flex-col md:flex-row justify-between items-center text-gray-300 text-xs sm:text-sm gap-3">
            <p className="mb-1 md:mb-0">
              © Святослав Бережний 2025 | Усі права захищено
            </p>
            <div className="flex gap-4">
              <Link to="#" className="hover:text-white">
                Умови використання
              </Link>
              <Link to="#" className="hover:text-white">
                Політика конфіденційності
              </Link>
              <Link to="/contact" className="hover:text-white">
                Зв&apos;язатися з нами
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
