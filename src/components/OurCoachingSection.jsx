import { useState } from "react";
import PassGreen from "../assets/PassGreen.svg";
import ArrowRightSmall from "../assets/ArrowRightSmall.svg";

import Coach1 from "../assets/coach1.jpg";
import Coach2 from "../assets/coach2.jpg";
import Coach3 from "../assets/coach3.jpg";

import Facebook from "../assets/Facebook_green.svg";
import Instagram from "../assets/Instagram_green.svg";
import LinkedIn from "../assets/LinkedIn_green.svg";
import XIcon from "../assets/X_green.svg";

import CoachingLines from "../assets/coaching-lines.svg";

const coaches = [
  {
    id: 1,
    name: "Олена Коваленко",
    role: "Візовий консультант (США, Канада)",
    image: Coach1,
    socials: {
      x: "https://x.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    id: 2,
    name: "Ігор Шевченко",
    role: "Імміграційний юрист (ЄС)",
    image: Coach2,
    socials: {
      x: "https://x.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    id: 3,
    name: "Марія Литвин",
    role: "Карʼєрний коуч для релокації",
    image: Coach3,
    socials: {
      x: "https://x.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

function OurCoachingSection() {
  const [activeId, setActiveId] = useState(coaches[0].id);
  const activeCoach = coaches.find((c) => c.id === activeId);

  return (
    <section className="w-11/12 max-w-6xl mx-auto mb-16">
      <div
        className="
          rounded-3xl bg-[#f4f9f4]
          px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14
          grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]
          items-center relative overflow-hidden
        "
      >
        {/* фон з хвилястими лініями з Figma */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <img
            src={CoachingLines}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* ЛІВА ЧАСТИНА: заголовок + список людей */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <img src={PassGreen} alt="" className="w-5 h-5" />
            <p className="uppercase text-xs sm:text-sm font-semibold tracking-[0.14em] text-darkGreen">
              наші експерти
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] leading-tight font-bold text-darkGreen mb-6">
            Команда, яка веде вас через увесь шлях імміграції
          </h2>

          <div className="space-y-4">
            {coaches.map((coach) => {
              const isActive = coach.id === activeId;
              return (
                <button
                  key={coach.id}
                  type="button"
                  onClick={() => setActiveId(coach.id)}
                  className={`
                    w-full text-left rounded-2xl flex items-center justify-between gap-4
                    px-5 py-4 sm:px-7 sm:py-5 transition
                    ${
                      isActive
                        ? "bg-white shadow-md"
                        : "bg-white/70 hover:bg-white shadow-sm"
                    }
                  `}
                >
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-darkGreen">
                      {coach.name}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      {coach.role}
                    </p>
                  </div>
                  <span
                    className={`
                      flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center
                      transition
                      ${
                        isActive
                          ? "bg-lightGreen border-lightGreen"
                          : "bg-white border-lightGreen"
                      }
                    `}
                  >
                    <img
                      src={ArrowRightSmall}
                      alt=""
                      className={`
                        w-4 h-4
                        ${isActive ? "brightness-0 invert" : "brightness-0 invert-[0.4] saturate-[5] hue-rotate-[80deg]"}
                      `}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ПРАВА ЧАСТИНА: фото активної людини + соцмережі */}
        <div className="relative z-10 flex justify-center">
          <div className="relative max-w-sm w-full">
            <div className="rounded-3xl overflow-hidden bg-slate-200">
              {activeCoach?.image && (
                <img
                  src={activeCoach.image}
                  alt={activeCoach.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* соцмережі внизу фото */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md px-4 py-2 flex items-center gap-3">
              <a href={activeCoach?.socials.x} aria-label="X / Twitter">
                <img src={XIcon} alt="" className="w-4 h-4" />
              </a>
              <a href={activeCoach?.socials.facebook} aria-label="Facebook">
                <img src={Facebook} alt="" className="w-4 h-4" />
              </a>
              <a href={activeCoach?.socials.instagram} aria-label="Instagram">
                <img src={Instagram} alt="" className="w-4 h-4" />
              </a>
              <a href={activeCoach?.socials.linkedin} aria-label="LinkedIn">
                <img src={LinkedIn} alt="" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCoachingSection;
