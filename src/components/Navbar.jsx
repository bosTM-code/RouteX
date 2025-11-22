import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import LogoSvg from "../assets/Logo.svg";
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
    to: "/service",
    label: "Послуги",
  },
  {
    to: "/project",
    label: "проєкти",
  },
  {
    to: "/blog",
    label: "Блог",
  },
  {
    to: "/page",
    label: "Сторінки",
  },
  {
    to: "/contact",
    label: "Контакти",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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

        {/* NAVIGATION DESCTOP */}
        <nav className="hidden lg:flex items-center justify-between gap-5">
          {navLinks.map((item) => (
            <div
              key={item.to}
              className="flex items-center gap-0 uppercase text-sm text-darkGreen font-semibold xl:text-base hover:text-green-700 transition-colors duration-200"
            >
              <NavLink to={item.to}>{item.label}</NavLink>
              <button>
                <img src={ArrowDown} alt="arrowdown" />
              </button>
            </div>
          ))}
        </nav>
        <button
          className="flex items-center bg-lightGreen px-4 py-2 sm:px-5 sm:py-3 rounded-full 
             text-xs sm:text-sm lg:text-base text-white gap-2 max-w-[230px] 
             hover:bg-green-600 transition"
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

      {/* BACKDROP GREY BG BEHIND MENU*/}

      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-500 z-[999] ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
        onClick={openBurger}
      />

      {/* MOBILE ON CLICK NAV ON CLICK SLIDE ANIMATION*/}

      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg flex flex-col items-start gap-5 p-10 transition-transform duration-500 ease-in-out lg:hidden z-[999] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((item) => (
          <div
            key={item.to}
            className="uppercase text-sm font-semibold text-darkGreen"
          >
            <NavLink to={item.to} onClick={openBurger}>
              {item.label}
            </NavLink>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
