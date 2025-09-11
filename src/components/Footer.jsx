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
  { text: "Mistakes To Avoid", link: "" },
  { text: "Your Startup", link: "" },
  { text: "Knew About Fonts", link: "" },
  { text: "Knew About Fonts", link: "" },
];

const links = [
  { text: "Latest News", link: "" },
  { text: "Careers", link: "" },
  { text: "General Inquiries", link: "" },
  { text: "Case Studies", link: "" },
];

export default function Footer() {
  return (
    <footer className="bg-darkGreen">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 py-12">
          {/* CTA #1 */}
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-lightGreen flex items-center justify-center shrink-0">
              <img src={WalletIcon} alt="" className="w-10 h-10" />
            </div>
            <h3 className="text-white font-bold text-2xl sm:text-3xl leading-snug">
              Need Any Support For Tour And Visa?
            </h3>
          </div>

          {/* CTA #2 (with border on desktop) */}
          <div className="flex items-start gap-6 md:border-l md:border-white/10 md:pl-8">
            <div className="w-20 h-20 rounded-full bg-lightGreen flex items-center justify-center shrink-0">
              <img src={GlobeIcon} alt="" className="w-10 h-10" />
            </div>
            <h3 className="text-white font-bold text-2xl sm:text-3xl leading-snug">
              Are You Ready For Get Started Travelling?
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
              alt=""
              className=" absolute inset-0 z-0
               w-full h-full object-cover opacity-60"
            />
            <div className="relative z-10 grid gap-12 pt-16 pb-24 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-center">
              {/* Column 1: Logo + text + socials */}
              <div>
                <img src={LogoGreen} alt="RouteX" className="w-40 mb-6" />
                <p className="text-gray-300 text-sm mb-6 max-w-xs">
                  Corporate business typically refers to large-scale mansolat
                  enterprises or organizat
                </p>
                <div className="flex gap-6 text-white">
                  <a href="https://www.facebook.com/" aria-label="Facebook">
                    <img src={Facebook} alt="" />
                  </a>
                  <a href="https://www.instagram.com/" aria-label="Instagram">
                    <img src={Instagram} alt="" />
                  </a>
                  <a href="https://www.twitter.com/" aria-label="X/Twitter">
                    <img src={X} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/">
                    <img src={LinkedIn} alt="" />
                  </a>
                </div>
              </div>

              {/* Column 2: Services */}
              <div>
                <h4 className="text-white font-semibold mb-5">Services</h4>
                <div className="space-y-3 text-gray-300 text-sm">
                  {services.map((item) => (
                    <a key={item.text} href={item.link} className="block">
                      <div className="flex items-center gap-2">
                        <img src={CheckGreen} alt="" />
                        {item.text}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 3: Useful Link */}
              <div>
                <h4 className="text-white font-semibold mb-5">Useful Link</h4>
                <div className="space-y-3 text-gray-300 text-sm">
                  {links.map((item) => (
                    <a key={item.text} href={item.link} className="block">
                      <div className="flex items-center gap-2">
                        <img src={ArrowGreen} alt="" />
                        {item.text}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 4: Subscribe to Newsletter */}
              <div>
                <h4 className="text-white font-semibold mb-5">
                  Subscribe Our Newsletter
                </h4>
                <p className="text-gray-300 text-sm mb-4 max-w-xs">
                  Corporate business typically refers to large-scale mansola it.
                </p>
                <div className="flex overflow-hidden max-w-sm">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="flex-1 px-5 py-3 text-sm bg-black text-white placeholder-gray-400 focus:outline-none rounded-full"
                  />
                  <button className="bg-lightGreen text-white p-4 rounded-full shrink-0 -translate-x-9">
                    <img src={Telegram} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*full-width divider before bottom bar */}
          <div className="w-screen border-t border-white/10 relative left-1/2 right-1/2 -ml-[50vw]" />

          {/* Bottom bar */}
          <div className="py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p className="mb-4 md:mb-0">
              © Yoursitename 2024 | All Rights Reserved
            </p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-white">
                Terms & Condition
              </Link>
              <Link to="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
