// src/pages/Countries.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import HeroCommon from "../components/HeroCommon";
import CountryCard from "../components/CountryCard";
import { countryData, regions } from "../data/countryData";

function Countries() {
  const [activeRegionId, setActiveRegionId] = useState("europe");

  const currentCountries = countryData.filter(
    (c) => c.region === activeRegionId
  );

  return (
    <div className="bg-[#F4F8F2] min-h-screen overflow-x-hidden">
      <HeroCommon title="Країни" />

      <section className="w-11/12 max-w-6xl mx-auto py-12 lg:py-16 grid gap-10 lg:grid-cols-[260px,1fr]">
        {/* Ліва колонка – регіони */}
        <aside className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          {regions.map((reg) => {
            const isActive = reg.id === activeRegionId;
            return (
              <button
                key={reg.id}
                type="button"
                onClick={() => setActiveRegionId(reg.id)}
                className={
                  "w-full flex items-center justify-between px-5 py-3 text-sm border-b last:border-b-0 transition " +
                  (isActive
                    ? "bg-lightGreen text-white"
                    : "bg-white text-darkGreen hover:bg-slate-50")
                }
              >
                <span>{reg.name}</span>
                <span
                  className={
                    "w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold border " +
                    (isActive
                      ? "bg-white text-lightGreen border-white"
                      : "border-lightGreen text-lightGreen")
                  }
                >
                  {isActive ? "−" : "+"}
                </span>
              </button>
            );
          })}
        </aside>

        {/* Права колонка – картки країн */}
        <div className="grid sm:grid-cols-2 gap-5">
          {currentCountries.map((country) => (
            <Link
              key={country.id}
              to={`/countries/${country.id}`} // 🔗 перехід на деталі
              className="block"
            >
              <CountryCard
                key={country.id}
                title={country.name}
                flag={country.flag}
                points={country.services} // масив з 3 пунктами
                shortDescription={country.shortDescription} // запасний варіант
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Countries;
