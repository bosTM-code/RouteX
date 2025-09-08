import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LogoSvg from "../assets/Logo.svg";
import ArrowDown from "../assets/ArrowDown.svg";
import ArrowRight from "../assets/arrowRight.svg";

const navLinks = [
  {
    to: "/",
    label: "home",
  },
  {
    to: "/about",
    label: "about us",
  },
  {
    to: "/service",
    label: "services",
  },
  {
    to: "/project",
    label: "projects",
  },
  {
    to: "/blog",
    label: "blog",
  },
  {
    to: "/page",
    label: "page",
  },
  {
    to: "/contact",
    label: "contact",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function openBurger() {
    return setMobileOpen(!mobileOpen);
  }

  return (
    <div className="sticky top-0 left-0 w-full bg-white z-50">
      <div className="flex items-center justify-between mx-auto w-4/5 py-4 sm:py-8 md:py-11 lg:w-11/12">
        {/* LOGO IMG */}
        <Link to="/">
          <img
            src={LogoSvg}
            alt="Logo"
            className="w-[125px] sm:w-[150px] md:w-[200px] lg:w-[125px] xl:w-[150px]"
          />
        </Link>

        {/* NAVIGATION DESCTOP */}
        <div className="hidden lg:flex items-center justify-between gap-5">
          {navLinks.map((item) => (
            <div className="flex items-center gap-1 uppercase text-sm font-medium xl:text-base">
              <NavLink to={item.to} key={item.label}>
                {item.label}
              </NavLink>
              <button>
                <img src={ArrowDown} alt="arrowdown" />
              </button>
            </div>
          ))}
        </div>
        <button className="hidden lg:flex items-center bg-lightGreen px-5 py-4 rounded-full text-sm text-white xl:text-base gap-2">
          <div className="">Get An Appointment</div>
          <img src={ArrowRight} alt="arrowright" />
        </button>

        {/* BURGER MOBILE */}

        <button
          className="lg:hidden z-50 flex flex-col justify-between w-12 sm:w-14 md:w-16 h-10 sm:h-11 md:h-[48px]"
          onClick={openBurger}
        >
          <span
            className={`h-1.5 w-full bg-black rounded-full transition-all duration-300 ${
              mobileOpen
                ? "rotate-45 translate-y-[17px] sm:translate-y-[19.65px] md:translate-y-[21.5px]"
                : ""
            }`}
          />
          <span
            className={`h-1.5 w-full bg-black rounded transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-1.5 w-full bg-black rounded transition-all duration-300 ${
              mobileOpen
                ? "-rotate-45 -translate-y-[17px] sm:-translate-y-[19.65px] md:-translate-y-[21.5px]"
                : ""
            }`}
          />
        </button>
      </div>

      {/* BACKDROP GREY BG BEHIND MENU*/}

      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
        onClick={openBurger}
      />

      {/* MOBILE ON CLICK NAV ON CLICK SLIDE ANIMATION*/}

      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg flex flex-col items-start gap-5 p-10 transition-transform duration-500 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((item) => (
          <div key={item.label} className="uppercase text-sm font-medium">
            <NavLink to={item.to} onClick={openBurger}>
              {item.label}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
