import { useState, useEffect } from "react";
import SuccessStoryCard from "./SuccessStoryCard";

const stories = [
  {
    id: 1,
    name: "Андрій Коваленко",
    role: "Senior Developer, переїзд до Німеччини",
    text: "Команда RouteX допомогла мені отримати Blue Card з першої спроби. Вони перевірили контракт, підготували пакет документів і пояснили кожен крок до співбесіди.",
  },
  {
    id: 2,
    name: "Олена Дяченко",
    role: "Студентка, навчання в Канаді",
    text: "Ми разом підібрали університет, програму та підготували всі фінансові докази. Віза була схвалена швидше, ніж я очікувала.",
  },
  {
    id: 3,
    name: "Ігор та Марія",
    role: "Сімейна імміграція до Португалії",
    text: "RouteX розробили для нас покрокову стратегію переїзду: від вибору міста до відкриття рахунку та подачі на резиденцію.",
  },
  {
    id: 4,
    name: "Світлана Гринюк",
    role: "Медична сестра, релокація до Великої Британії",
    text: "Мені допомогли розібратися з ліцензуванням, контрактом і візою для NHS. Без їх пояснень усе виглядало б надто складно.",
  },
  {
    id: 5,
    name: "Роман Пархоменко",
    role: "Підприємець, відкриття бізнесу в Польщі",
    text: "Консультанти супроводжували реєстрацію компанії, підготовку документів для Karta Pobytu та пояснили нюанси податків.",
  },
  {
    id: 6,
    name: "Катерина Литвин",
    role: "Data Scientist, переїзд до Нідерландів",
    text: "Ми заздалегідь продумали візову стратегію, щоб офер від компанії не згорів. Усі документи були готові ще до подачі.",
  },
  {
    id: 7,
    name: "Тарас Ковтун",
    role: "Фрилансер, віза цифрового кочівника в Іспанію",
    text: "Допомогли зібрати докази доходів, підготувати документи для консульства й уникнути типових помилок у формулярах.",
  },
  {
    id: 8,
    name: "Людмила Сергєєва",
    role: "UX-дизайнер, Канада",
    text: "Пояснили різницю між програмами, обрали оптимальний шлях через навчання з подальшою імміграцією. Весь процес був під контролем.",
  },
  {
    id: 9,
    name: "Марко та Софія",
    role: "Молода сімʼя, Німеччина",
    text: "Ми переїхали разом: спершу робоча віза для чоловіка, потім воззʼєднання сімʼї. RouteX тримали нас в курсі змін законодавства.",
  },
];

const PAGE_SIZE = 6;

// Хук, щоб знати, чи зараз md і більше
function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 768; // tailwind md
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(min-width: 768px)");

    const handler = (e) => setIsMdUp(e.matches);

    handler(mql); // початкове значення
    mql.addEventListener("change", handler);

    return () => mql.removeEventListener("change", handler);
  }, []);

  return isMdUp;
}

function SuccessStoriesSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const isMdUp = useIsMdUp();

  const totalPages = Math.ceil(stories.length / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const pageItems = stories.slice(startIndex, startIndex + PAGE_SIZE);

  const handlePageClick = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // для гріда: 1 колонка на мобілці, 2 на md+
  const cols = isMdUp ? 2 : 1;

  return (
    <section className="w-11/12 max-w-6xl mx-auto py-16">
      <div className="mb-10">
        <p className="uppercase text-xs sm:text-sm font-semibold tracking-[0.12em] text-darkGreen mb-2">
          Історії успіху
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-darkGreen leading-tight">
          Реальні кейси клієнтів,
          <br />
          які вже переїхали за кордон
        </h1>
      </div>

      {/* грід: 1 колонка на мобілці, 2 – на md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {pageItems.map((story, idx) => {
          const row = Math.floor(idx / cols);
          const col = idx % cols;

          const isWhite = (row + col) % 2 === 0;
          const bgColor = isWhite ? "bg-white" : "bg-[#F1F5EB]";

          return (
            <SuccessStoryCard
              key={story.id}
              id={story.id} // ✅ ДОДАЛИ
              text={story.text}
              name={story.name}
              role={story.role}
              bg={bgColor}
            />
          );
        })}
      </div>

      {/* пагінація */}
      <div className="flex items-center justify-center gap-1">
        <button
          type="button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 text-xs border rounded ${
            currentPage === 1
              ? "border-slate-200 text-slate-300 cursor-default"
              : "border-slate-300 text-slate-700 hover:bg-[#F4F8F2]"
          }`}
        >
          ‹
        </button>

        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const active = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              onClick={() => handlePageClick(page)}
              className={`min-w-[32px] h-8 mx-0.5 rounded border text-xs ${
                active
                  ? "bg-lightGreen text-white border-lightGreen"
                  : "border-slate-300 text-slate-700 hover:bg-[#F4F8F2]"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 text-xs border rounded ${
            currentPage === totalPages
              ? "border-slate-200 text-slate-300 cursor-default"
              : "border-slate-300 text-slate-700 hover:bg-[#F4F8F2]"
          }`}
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default SuccessStoriesSection;
