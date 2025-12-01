import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PassWhite from "../assets/PassWhite.svg";
import ArrowRightSmall from "../assets/ArrowRightSmall.svg";
import ArrowLeftSmall from "../assets/ArrowLeftSmall.svg";
import ArrowRight from "../assets/arrowRight.svg";
import { countryData } from "../data/countryData";

// Країни, які показуємо в цьому слайдері
const sliderCountryIds = ["canada", "germany", "poland", "usa", "uk"];

function CountriesSection() {
  const [activeIndex, setActiveIndex] = useState(1); // друга картка активна за замовчуванням
  const navigate = useNavigate();

  // Беремо потрібні країни з загального масиву
  const countries = useMemo(
    () =>
      countryData
        .filter((c) => sliderCountryIds.includes(c.id))
        .map((c) => ({
          id: c.id,
          name: c.name,
          description: c.shortDescription, // використовуємо shortDescription
          flag: c.flag,
        })),
    []
  );

  if (!countries.length) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + countries.length) % countries.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % countries.length);
  };

  return (
    <section className="w-11/12 bg-darkGreen rounded-3xl mx-auto px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-24 lg:px-20 lg:py-32 overflow-hidden my-14 text-white">
      {/* UPPER */}
      <div className="w-[71.66%] mx-auto flex flex-col md:flex-row justify-between gap-6 mb-10 md:mb-14">
        <div className="text-white">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <img src={PassWhite} alt="Іконка паспорта" />
            <p className="uppercase text-sm font-semibold tracking-wide">
              Наші країни
            </p>
          </div>

          <h2 className="mt-3 w-full md:w-3/4 text-lg sm:text-xl xl:text-3xl font-bold mx-auto md:mx-0">
            Країни, з якими ми працюємо для віз та релокації
          </h2>
        </div>

        <div className="self-end hidden md:flex flex-shrink-0 gap-3">
          <button
            className="p-4 lg:p-5 bg-darkGreen rounded-full border border-white/70 hover:bg-lightGreen hover:border-lightGreen transition"
            aria-label="Попередня країна"
            onClick={handlePrev}
          >
            <img src={ArrowLeftSmall} alt="Стрілка вліво" />
          </button>
          <button
            className="p-4 lg:p-5 bg-darkGreen rounded-full border border-white/70 hover:bg-lightGreen hover:border-lightGreen transition"
            aria-label="Наступна країна"
            onClick={handleNext}
          >
            <img src={ArrowRightSmall} alt="Стрілка вправо" />
          </button>
        </div>
      </div>

      {/* LOWER */}
      <div className="py-1 px-1 rounded-xl grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-5 w-[71.66%] mx-auto">
        {countries.map((country, index) => {
          const isActive = index === activeIndex;

          const cardCols = isActive
            ? "col-span-2 sm:col-span-2 md:col-span-4 xl:col-span-4"
            : "col-span-2 sm:col-span-2 md:col-span-2 xl:col-span-2";

          return (
            <div
              key={country.id}
              className={
                "h-full flex flex-col justify-between bg-gray-400/30 rounded-xl " +
                cardCols
              }
            >
              {/* НЕактивна картка */}
              {!isActive && (
                <>
                  <div className="self-end p-5">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                      aria-label={`Обрати країну ${country.name}`}
                      className="inline-block rounded-full border border-lightGreen w-14 h-14 sm:w-16 sm:h-16 overflow-hidden hover:shadow-lg hover:border-white transition"
                    >
                      {country.flag && (
                        <img
                          src={country.flag}
                          alt={`Прапор країни ${country.name}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </button>
                  </div>
                  <div className="px-5 pb-5 text-center">
                    <h3 className="text-xl sm:text-lg font-semibold">
                      {country.name}
                    </h3>
                  </div>
                </>
              )}

              {/* АКТИВНА картка */}
              {isActive && (
                <>
                  <div className="flex items-center justify-between px-5 pt-5">
                    <h3 className="flex-1 text-xl sm:text-xl font-semibold text-center">
                      {country.name}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                      aria-label={`Обрана країна ${country.name}`}
                      className="rounded-full border border-white w-16 h-16 sm:w-18 sm:h-18 overflow-hidden bg-lightGreen/20 shadow-lg transition"
                    >
                      {country.flag && (
                        <img
                          src={country.flag}
                          alt={`Прапор країни ${country.name}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </button>
                  </div>

                  <div className="bg-lightGreen rounded-xl mx-2 mb-2 mt-3 p-6 sm:p-7 flex flex-col justify-between gap-3 text-white">
                    <p className="text-xs sm:text-sm text-white/90">
                      {country.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => navigate(`/countries/${country.id}`)}
                      className="self-start flex gap-2 items-center px-6 py-3 border border-white rounded-full hover:shadow-2xl transition-all duration-300"
                    >
                      <span className="text-sm font-semibold">Детальніше</span>
                      <img src={ArrowRight} alt="Стрілка вправо" />
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CountriesSection;
