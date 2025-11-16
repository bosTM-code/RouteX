import { Link } from "react-router-dom";
import Paris from "../assets/paris3.png";
import Tower from "../assets/tower.svg";

function Hero() {
  return (
    <section className="relative w-11/12 bg-darkGreen rounded-3xl mx-auto px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-24 lg:px-20 lg:py-32 flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16 overflow-hidden">
      {/* DECORATIVE IMAGE (BACKGROUND) */}
      <img
        src={Tower}
        alt="Ейфелева вежа"
        className="absolute left-6 bottom-6 w-40 sm:w-52 md:w-64 lg:w-96 opacity-20 pointer-events-none select-none"
      />

      {/* LEFT CONTENT */}
      <div className="flex-1 text-center lg:text-left relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[90px] text-white font-bold leading-tight xl:mb-[100px]">
          Візи без стресу, <br />
          бізнес — без кордонів
        </h1>

        <p className="mt-4 text-sm sm:text-base text-gray-100 max-w-xl mx-auto lg:mx-0">
          Консалтинговий центр RouteX допомагає підприємцям та фахівцям безпечно
          релокуватися, відкривати компанії за кордоном та планувати податки без
          зайвої бюрократії.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            to="/about"
            className="px-6 py-3 bg-lightGreen text-white rounded-full font-medium hover:bg-green-600 transition"
          >
            Дізнатися більше →
          </Link>
          <Link
            to="/blog"
            className="px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-darkGreen transition"
          >
            ▶ Переглянути відео
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 flex justify-center relative z-10">
        <img
          src={Paris}
          alt="Вид на Париж"
          className="max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[375px] xl:max-w-[500px] rounded-3xl object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;
