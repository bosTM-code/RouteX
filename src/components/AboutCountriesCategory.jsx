import { useState } from "react";
import PassGreen from "../assets/PassGreen.svg";
import ArrowRightSmall from "../assets/ArrowRightSmall.svg";

// 🔽 Прапори в кружечку (svg), назви файлів підлаштуй під свій проєкт
import FlagGermany from "../assets/flags/germany.svg";
import FlagSouthKorea from "../assets/flags/southKorea.svg";
import FlagJapan from "../assets/flags/japan.svg";
import FlagIndonesia from "../assets/flags/indonesia.svg";
import FlagSouthAfrica from "../assets/flags/southAfrica.svg";
import FlagTurkey from "../assets/flags/turkey.svg";
import FlagCanada from "../assets/flags/canada.svg";
import FlagUSA from "../assets/flags/usa.svg";
import FlagUK from "../assets/flags/uk.svg";
import FlagSpain from "../assets/flags/spain.svg";
import FlagPortugal from "../assets/flags/portugal.svg";
import FlagAustria from "../assets/flags/austria.svg";

// Список регіонів з id
const regions = [
  { id: "europe", label: "Європа" },
  { id: "asia", label: "Азія" },
  { id: "north-america", label: "Північна Америка" },
  { id: "south-america", label: "Латинська Америка" },
  { id: "africa", label: "Африка" },
];

// Країни для кожного регіону
const regionCountries = {
  europe: [
    { name: "Німеччина", flag: FlagGermany },
    { name: "Велика Британія", flag: FlagUK },
    { name: "Іспанія", flag: FlagSpain },
    { name: "Португалія", flag: FlagPortugal },
    { name: "Австрія", flag: FlagAustria },
  ],
  asia: [
    { name: "Південна Корея", flag: FlagSouthKorea },
    { name: "Японія", flag: FlagJapan },
    { name: "Індонезія", flag: FlagIndonesia },
    { name: "Туреччина", flag: FlagTurkey },
  ],
  "north-america": [
    { name: "Канада", flag: FlagCanada },
    { name: "США", flag: FlagUSA },
  ],
  "south-america": [
    // Можеш додати свої прапори
  ],
  africa: [{ name: "ПАР", flag: FlagSouthAfrica }],
};

function AboutCountriesCategory() {
  const [activeRegion, setActiveRegion] = useState("europe");
  const countries = regionCountries[activeRegion] || [];

  return (
    <section className="w-11/12 max-w-6xl mx-auto my-16">
      {/* Верхній заголовок */}
      <div className="text-left mb-8">
        <div className="flex items-center gap-2 mb-3">
          <img src={PassGreen} alt="" className="w-5 h-5" />
          <p className="uppercase text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-darkGreen">
            категорії країн
          </p>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] leading-tight font-bold text-darkGreen max-w-3xl">
          Відкривайте світ: напрямки, з якими ми працюємо
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* ЛІВИЙ БЛОК – список регіонів */}
        <aside className="w-full lg:w-72 bg-slate-200 rounded-3xl shadow-sm overflow-hidden">
          {regions.map((region) => {
            const isActive = region.id === activeRegion;
            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setActiveRegion(region.id)}
                className={
                  "w-full flex items-center justify-between px-5 sm:px-6 py-3.5 text-sm border-b last:border-b-0 transition " +
                  (isActive
                    ? "bg-white rounded-3xl border border-lightGreen text-darkGreen font-semibold"
                    : "bg-transparent text-slate-600 hover:bg-slate-50")
                }
              >
                <span>{region.label}</span>
                <span
                  className={
                    "inline-flex items-center justify-center w-7 h-7 rounded-full border text-xs " +
                    (isActive
                      ? "border-lightGreen bg-lightGreen text-white"
                      : "border-slate-200 text-slate-400")
                  }
                >
                  <img
                    src={ArrowRightSmall}
                    alt=""
                    className={
                      "w-3 h-3 " +
                      (isActive ? "brightness-0 invert" : "opacity-70")
                    }
                  />
                </span>
              </button>
            );
          })}
        </aside>

        {/* ПРАВИЙ БЛОК – картки країн */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
          {countries.map((country) => (
            <article
              key={country.name}
              className="flex items-center gap-4 bg-slate-200 rounded-2xl border border-lightGreen shadow-sm px-5 py-4 hover:shadow-md transition"
            >
              {/* Кружок з прапором */}
              <div className="w-12 h-12 rounded-full border border-lightGreen  overflow-hidden flex items-center justify-center bg-slate-50">
                {country.flag && (
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-darkGreen">
                {country.name}
              </h3>
            </article>
          ))}

          {/* Якщо в регіоні поки немає країн */}
          {countries.length === 0 && (
            <div className="col-span-1 md:col-span-2 text-sm text-slate-500">
              Для цього регіону ми готуємо оновлення списку країн.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutCountriesCategory;
