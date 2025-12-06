import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LogoMin from "../assets/Logo_min.svg";
import ArrowDown from "../assets/ArrowDown.svg";
import ArrowRight from "../assets/arrowRight.svg";

const navLinks = [
  {
    to: "/",
    label: "Головна",
  },
  {
    to: "/about",
    label: "Про нас",
  },
  {
    label: "Послуги",
    children: [
      { to: "/visa", label: "Візи" },
      { to: "/countries", label: "Країни" },
      { to: "/coaching", label: "Коучинг" },
      { to: "/pricing-tables", label: "Ціни" },
    ],
  },
  {
    to: "/success-story",
    label: "Проєкти",
  },
  {
    to: "/blog",
    label: "Блог",
  },
  {
    label: "Сторінки",
    children: [
      { to: "/team", label: "Команда" },
      { to: "/faq", label: "FAQ" },
      { to: "/gallery", label: "Галерея" },
    ],
  },
  {
    to: "/contact",
    label: "Контакти",
  },
];

// Кнопка CTA
function CtaButton({ className = "", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "flex items-center bg-lightGreen px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm lg:text-base text-white gap-2 max-w-[260px] hover:bg-green-600 transition " +
        className
      }
    >
      <span className="whitespace-normal leading-snug text-center">
        Записатися на консультацію
      </span>
      <img
        src={ArrowRight}
        alt="Перейти до запису"
        className="w-4 h-4 sm:w-5 sm:h-5"
      />
    </button>
  );
}

function Navbar({ onOpenConsultation = () => {} }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // для "Сторінки"

  const openBurger = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex items-center justify-between mx-auto w-4/5 py-4 sm:py-4 md:py-5 lg:py-6 lg:w-11/12">
        {/* LOGO */}
        <Link to="/">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src={LogoMin}
                alt="RouteX Logo"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-darkGreen hover:text-green-700 transition-colors duration-200">
              RouteX
            </span>
          </div>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden lg:flex items-center justify-between gap-5">
          {navLinks.map((item) =>
            item.children ? (
              // ДРОПДАУН "СТОРІНКИ" ПО КЛІКУ
              <div
                key={item.label}
                className="relative"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown((prev) =>
                      prev === item.label ? null : item.label
                    )
                  }
                  className="flex items-center gap-1 uppercase text-sm xl:text-base font-semibold text-darkGreen hover:text-green-700"
                >
                  {item.label}
                  <img src={ArrowDown} alt="arrowdown" />
                </button>

                {openDropdown === item.label && (
                  <div className="absolute left-0 mt-0 bg-white rounded-2xl shadow-lg border border-slate-100 min-w-[180px] py-2 z-[1000]">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-darkGreen hover:bg-slate-50"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className="uppercase text-sm xl:text-base font-semibold text-darkGreen hover:text-green-700"
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* CTA – тільки на десктопі */}
        <CtaButton className="hidden lg:flex" onClick={onOpenConsultation} />

        {/* BURGER MOBILE */}
        <button
          className="lg:hidden z-[1000] flex flex-col justify-between w-10 sm:w-12 md:w-14 h-8 sm:h-10 md:h-12"
          onClick={openBurger}
        >
          <span
            className={`h-1.5 w-full bg-darkGreen rounded-full transition-all duration-300 ${
              mobileOpen
                ? "rotate-45 translate-y-2 sm:translate-y-3.5 md:translate-y-5"
                : ""
            }`}
          />
          <span
            className={`h-1.5 w-full bg-darkGreen rounded transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-1.5 w-full bg-darkGreen rounded transition-all duration-300 ${
              mobileOpen
                ? "-rotate-45 -translate-y-[17px] sm:-translate-y-[19.65px] md:-translate-y-[21.5px]"
                : ""
            }`}
          />
        </button>
      </div>

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-500 z-[999] ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
        onClick={openBurger}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg flex flex-col items-center gap-5 p-10 transition-transform duration-500 ease-in-out lg:hidden z-[999] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((item) =>
          item.children ? (
            <div key={item.label} className="w-full">
              <p className="uppercase text-xs font-semibold text-slate-400 mb-1 text-center">
                {item.label}
              </p>
              {item.children.map((child) => (
                <div
                  key={child.to}
                  className="uppercase text-sm font-semibold text-darkGreen mb-2 text-center"
                >
                  <NavLink to={child.to} onClick={openBurger}>
                    {child.label}
                  </NavLink>
                </div>
              ))}
            </div>
          ) : (
            <div
              key={item.to}
              className="uppercase text-sm font-semibold text-darkGreen text-center"
            >
              <NavLink to={item.to} onClick={openBurger}>
                {item.label}
              </NavLink>
            </div>
          )
        )}

        {/* CTA внизу мобільного меню */}
        <CtaButton
          className="w-full justify-center mt-auto"
          onClick={() => {
            openBurger();
            onOpenConsultation();
          }}
        />
      </div>
    </header>
  );
}

export default Navbar;
