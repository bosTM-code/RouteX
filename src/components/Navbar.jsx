import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LogoSvg from "../assets/Logo.svg";
import Burger from "../assets/burger.svg";
import ArrowDown from "../assets/ArrowDown.svg";
import ArrowRight from "../assets/arrowRight.svg"


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
    
        
    function isOpenBurger() {
        return setMobileOpen(!mobileOpen);
    }
  
    return (
        <div>
            <div className="flex items-center justify-between mx-auto w-4/5 py-4 sm:py-8 md:py-11 lg:w-11/12">

                {/* LOGO IMG */}
                <Link to="/">
                    <img src={LogoSvg} alt="Logo" className="w-[125px] sm:w-[150px] md:w-[200px] lg:w-[125px] xl:w-[150px]"/>
                </Link>
                
                {/* NAVIGATION DESCTOP */}
                <div className="hidden lg:flex items-center justify-between gap-5">
                    {navLinks.map((item) => (
                        <div className="flex items-center gap-1 uppercase text-sm font-medium xl:text-base">
                            <NavLink to={item.to} key={item.label}>{item.label}</NavLink>
                            <button><img src={ArrowDown} alt="arrowdown" /></button>
                        </div>    
                    ))}
                </div>
                <button className="hidden lg:flex items-center bg-lightGreen px-5 py-4 rounded-full text-sm text-white xl:text-base gap-2">
                    <div className="">Get An Appointment</div>
                    <img src={ArrowRight} alt="arrowright" />
                </button>
                
                {/* BURGER MOBILE */}
                <button className="lg:hidden" onClick={isOpenBurger}>
                    <img src={Burger} alt="burger" className="w-[65px] sm:w-[75px] md:w-[90px] "/>
                </button>
                
            </div>
            {/* MOBILE ON CLICK NAV*/}
            <div className={(mobileOpen ? "" : "hidden ") + "w-4/5 mx-auto flex flex-col items-start gap-5 lg:hidden"}>
                {navLinks.map((item) => (
                    <div className="uppercase text-sm font-medium">
                        <NavLink to={item.to} key={item.label}>{item.label}</NavLink>
                    </div>    
                ))}
            </div>
        </div>    
  );
}

export default Navbar;
