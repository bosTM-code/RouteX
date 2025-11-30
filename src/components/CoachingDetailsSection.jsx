import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coachingPrograms } from "../data/coachingPrograms";
import PhoneIcon from "../assets/phoneGreen.svg";

function CoachingDetailsSection() {
  const { id } = useParams();
  const navigate = useNavigate();

  // якщо id немає або не знайдено – беремо перший елемент
  const initial =
    coachingPrograms.find((c) => c.id === id) || coachingPrograms[0];

  const [activeId, setActiveId] = useState(initial.id);
  const active =
    coachingPrograms.find((c) => c.id === activeId) || coachingPrograms[0];

  const handleChangeProgram = (newId) => {
    setActiveId(newId);
    navigate(`/coaching/${newId}`, { replace: false });
  };

  return (
    <section className="w-11/12 max-w-6xl mx-auto py-12 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[260px,1fr]">
        {/* ЛІВА КОЛОНКА: список програм + контакт */}
        <aside className="space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            {coachingPrograms.map((item, index) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleChangeProgram(item.id)}
                  className={
                    "w-full flex items-center justify-between px-5 py-3 text-sm border-b border-slate-100 last:border-b-0 transition " +
                    (isActive
                      ? "bg-lightGreen text-white"
                      : "bg-white text-darkGreen hover:bg-slate-50")
                  }
                >
                  <span className="truncate text-left">{item.shortTitle}</span>
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

          {/* Блок GET TOUCH */}
          <div className="bg-lightGreen rounded-3xl text-white px-6 py-7 flex flex-col items-center gap-3 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
              <img src={PhoneIcon} alt="" className="w-6 h-6" />
            </div>
            <p className="uppercase tracking-wide text-xs opacity-90">
              Звʼязатися
            </p>
            <p className="text-lg font-semibold">+38 (000) 123-45-67</p>
            <p className="text-xs text-white/80 text-center">
              Напишіть або зателефонуйте, щоб підібрати формат коучингу саме під
              вас.
            </p>
          </div>
        </aside>

        {/* ПРАВА КОЛОНКА: основний контент */}
        <div className="space-y-8">
          {/* Верхній блок з картинкою та текстом */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-darkGreen mb-4">
                {active.aboutTitle}
              </h2>

              {active.aboutText?.map((p, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3"
                >
                  {p}
                </p>
              ))}

              {/* Дві колонки з пунктами */}
              <div className="mt-5 grid gap-6 sm:grid-cols-2 text-sm text-slate-700">
                <ul className="space-y-2">
                  {active.leftPoints?.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] inline-block w-1.5 h-1.5 rounded-full bg-lightGreen" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {active.rightPoints?.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] inline-block w-1.5 h-1.5 rounded-full bg-lightGreen" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Картинка праворуч */}
            <div className="w-full lg:w-[320px] xl:w-[360px] h-52 sm:h-64 lg:h-auto rounded-3xl overflow-hidden bg-slate-200 shrink-0">
              {active.image && (
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          {/* Додатковий “сіро-зелений” блок як у макеті */}
          <div className="bg-[#F1F5EB] rounded-3xl h-52 sm:h-60 lg:h-64" />

          {/* Наші переваги */}
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-darkGreen mb-3">
              {active.benefitsTitle}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {active.benefitsText}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default CoachingDetailsSection;
