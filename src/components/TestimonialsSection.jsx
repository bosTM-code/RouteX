import { useState } from "react";
import ArrowLeftSmall from "../assets/ArrowLeftGreen.svg";
import ArrowRightSmall from "../assets/ArrowRightGreen.svg";
import Travel1 from "../assets/Travel1.jpg"; // або будь-яке інше фото

const testimonials = [
  {
    id: 1,
    name: "Андрій Мельник",
    role: "IT-фахівець, віза до Канади",
    text: "RouteX допомогли розібратися з усіма документами для робочої візи. Ми чітко розклали весь процес по кроках, і співбесіда в консульстві пройшла спокійно та без сюрпризів.",
  },
  {
    id: 2,
    name: "Оксана Литвин",
    role: "Студентка, навчання в Німеччині",
    text: "Команда пояснила, яку саме програму обрати, як підготувати мотиваційний лист і підтвердження фінансів. Без їхніх підказок я б точно заплуталась у вимогах університету.",
  },
  {
    id: 3,
    name: "Сергій Коваленко",
    role: "Підприємець, релокація бізнесу до ЄС",
    text: "Ми отримали не лише візову підтримку, а й консультації з податків та відкриття компанії. Це сильно зекономило час і гроші на етапі переїзду.",
  },
];

function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="w-11/12 max-w-6xl mx-auto mb-16">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.4fr)] items-center">
        {/* Ліва картка / зображення */}
        <div className="rounded-3xl overflow-hidden bg-slate-200 h-72 sm:h-80 lg:h-96">
          <img
            src={Travel1}
            alt="Клієнти RouteX під час подорожі"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Права зелена картка з відгуком */}
        <article className="bg-lightGreen rounded-3xl text-white px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 flex flex-col justify-between h-full shadow-md">
          {/* Цитата */}
          <div className="space-y-6">
            <div className="text-3xl font-bold leading-none">“</div>
            <p className="text-sm sm:text-base leading-relaxed max-w-xl">
              {current.text}
            </p>

            {/* Автор */}
            <div className="flex items-center gap-4 mt-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/60" />
              <div>
                <p className="text-sm sm:text-base font-semibold">
                  {current.name}
                </p>
                <p className="text-xs sm:text-sm text-white/80">
                  {current.role}
                </p>
              </div>
            </div>
          </div>

          {/* Лінія + стрілки */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="hidden sm:block flex-1 h-px bg-white/50" />
            <div className="flex items-center gap-3 ml-auto">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Попередній відгук"
                className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center hover:bg-lightGreen border border-white  transition"
              >
                <img
                  src={ArrowLeftSmall}
                  alt="Arrow"
                  className="w-4 h-4 transition group-hover:brightness-0 group-hover:invert"
                />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Наступний відгук"
                className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center hover:bg-lightGreen border border-white transition"
              >
                <img
                  src={ArrowRightSmall}
                  alt="Arrow"
                  className="w-4 h-4 transition group-hover:brightness-0 group-hover:invert"
                />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default TestimonialsSection;
