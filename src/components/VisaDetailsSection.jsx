// src/components/VisaDetailsSection.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { visaData } from "../data/visaData";
import PhoneIcon from "../assets/phoneGreen.svg";

function VisaDetailsSection() {
  const { id } = useParams();

  const visa = visaData.find((v) => v.id === id) || visaData[0];
  const regions = visa.regions || [];

  // активний регіон – перший у списку
  const [activeRegionId, setActiveRegionId] = useState(regions[0]?.id || null);
  const activeRegion =
    regions.find((r) => r.id === activeRegionId) || regions[0] || null;

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="w-11/12 max-w-6xl mx-auto py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr),320px]">
        {/* ЛІВА КОЛОНКА: загальний текст + активний регіон */}
        <div>
          {/* Заголовок сторінки для обраної візи */}
          <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-darkGreen mb-4">
            {visa.detailsTitle || visa.title}
          </h1>

          {visa.detailsIntro && (
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              {visa.detailsIntro}
            </p>
          )}

          {/* ЧОМУ ОБРАТИ ЦЮ ВІЗУ – можна залишити як заголовок блоку */}
          {activeRegion && (
            <>
              <h2 className="text-lg sm:text-xl font-semibold text-darkGreen mb-3">
                {activeRegion.title}
              </h2>

              {activeRegion.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3"
                >
                  {p}
                </p>
              ))}

              {/* Дві колонки з вимогами / перевагами */}
              <div className="grid sm:grid-cols-2 gap-6 mt-4 text-sm text-slate-700">
                <ul className="space-y-2">
                  {activeRegion.bulletLeft?.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] inline-block w-1.5 h-1.5 rounded-full bg-lightGreen" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {activeRegion.bulletRight?.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] inline-block w-1.5 h-1.5 rounded-full bg-lightGreen" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* FAQ */}
          {visa.faqs?.length > 0 && (
            <section className="mt-10">
              <h3 className="text-lg sm:text-xl font-bold text-darkGreen mb-4">
                Часті запитання щодо цієї візи
              </h3>

              <div className="space-y-3">
                {visa.faqs.map((faq, index) => {
                  const isOpen = index === openFaqIndex;
                  return (
                    <div
                      key={faq.question}
                      className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between px-4 sm:px-5 py-3 text-left"
                      >
                        <span className="text-sm sm:text-base font-medium text-darkGreen">
                          {faq.question}
                        </span>
                        <span className="w-6 h-6 rounded-full border border-lightGreen text-lightGreen flex items-center justify-center text-sm">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-slate-700">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* ПРАВА КОЛОНКА: регіони + GET TOUCH */}
        <aside className="space-y-6">
          {/* Список регіонів */}
          {regions.length > 0 && (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              {regions.map((region) => {
                const isActive = region.id === activeRegionId;
                return (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setActiveRegionId(region.id)}
                    className={
                      "w-full flex items-center justify-between px-5 py-3 text-sm border-b border-slate-100 last:border-b-0 transition " +
                      (isActive
                        ? "bg-lightGreen text-white"
                        : "bg-white text-darkGreen hover:bg-slate-50")
                    }
                  >
                    <span>{region.label}</span>
                    <span
                      className={
                        "w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold border " +
                        (isActive
                          ? "bg-white text-lightGreen border-white"
                          : "bg-transparent text-lightGreen border-lightGreen")
                      }
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* GET TOUCH */}
          <div className="bg-[#F1F5EB] rounded-3xl px-6 py-7 flex flex-col items-center text-center shadow-sm">
            <p className="uppercase text-xs tracking-[0.16em] text-darkGreen mb-3">
              Звʼязатися
            </p>
            <div className="w-12 h-12 rounded-full bg-lightGreen flex items-center justify-center mb-3">
              <img src={PhoneIcon} alt="" className="w-6 h-6" />
            </div>
            <p className="text-xs text-slate-600 mb-1">Для швидкої відповіді</p>
            <p className="text-lg font-semibold text-darkGreen">
              +38 (000) 123-45-67
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default VisaDetailsSection;
