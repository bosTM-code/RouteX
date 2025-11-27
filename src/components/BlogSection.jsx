import { useState } from "react";
import PassGreen from "../assets/PassGreen.svg";
import ArrowLeftSmall from "../assets/ArrowLeftGreen.svg";
import ArrowRightSmall from "../assets/ArrowRightGreen.svg";
import ArrowRight from "../assets/arrowRightGreenSmall.svg";
import Visa from "../assets/BusinessVisa.webp";
import Europe from "../assets/europe.jpg";
import Study from "../assets/study.webp";
import Doc from "../assets/doc-na-vizu.jpeg";

const posts = [
  {
    id: 1,
    date: "19 жовтня 2024",
    author: "Admin",
    title: "5 кроків до успішної візової співбесіди в консульстві",
    excerpt:
      "Як підготуватися до запитань консула, що брати з собою та чого краще уникати під час інтерв’ю.",
    img: Visa,
  },
  {
    id: 2,
    date: "12 листопада 2024",
    author: "Admin",
    title: "Робочі візи до ЄС: що змінилося у 2024 році",
    excerpt:
      "Огляд основних програм для фахівців, оновлені вимоги та типові помилки заявників.",
    img: Europe,
  },
  {
    id: 3,
    date: "02 грудня 2024",
    author: "Admin",
    title: "Навчання за кордоном: як обрати країну та програму",
    excerpt:
      "Порівнюємо Канаду, Німеччину й Польщу: вартість, вимоги до абітурієнтів та перспективи після випуску.",
    img: Study,
  },
  {
    id: 4,
    date: "20 грудня 2024",
    author: "Admin",
    title: "Як підготувати ідеальний візовий пакет документів",
    excerpt:
      "Чекліст документів, переклади, апостиль і нотаріальне завірення — що важливо зробити завчасно.",
    img: Doc,
  },
];

function BlogSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % posts.length);
  };

  const visiblePosts = [];
  for (let i = 0; i < Math.min(visibleCount, posts.length); i++) {
    visiblePosts.push(posts[(startIndex + i) % posts.length]);
  }

  return (
    <section className="w-11/12 max-w-6xl mx-auto mb-20">
      {/* Верхній рядок: бейдж + заголовок + стрілки */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={PassGreen} alt="" className="w-5 h-5" />
            <p className="uppercase text-xs sm:text-sm font-semibold tracking-[0.14em] text-darkGreen">
              останні статті
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] leading-tight font-bold text-darkGreen max-w-xl">
            Блог про візи, імміграцію
            <br className="hidden sm:block" /> та релокацію
          </h2>
        </div>

        {/* Стрілки керування */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            type="button"
            onClick={handlePrev}
            className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-lightGreen flex items-center justify-center hover:bg-lightGreen transition"
            aria-label="Попередні статті"
          >
            <img
              src={ArrowLeftSmall}
              alt=""
              className="w-4 h-4 transition group-hover:brightness-0 group-hover:invert"
            />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-lightGreen flex items-center justify-center hover:bg-lightGreen transition"
            aria-label="Наступні статті"
          >
            <img
              src={ArrowRightSmall}
              alt=""
              className="w-4 h-4 group-hover:brightness-0 group-hover:invert"
            />
          </button>
        </div>
      </div>

      {/* Картки блогу */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visiblePosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
          >
            {/* Верхній сірий блок під картинку */}
            <div className="bg-slate-200 h-44 sm:h-52 lg:h-56 w-full">
              <img
                src={post.img}
                alt="post.title"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Текстова частина */}
            <div className="px-6 py-5 sm:px-7 sm:py-6 flex-1 flex flex-col gap-4">
              {/* дата + автор */}
              <div className="flex flex-wrap items-center gap-4 text-[11px] sm:text-xs text-slate-500">
                <span>📅 {post.date}</span>
                <span>👤 {post.author}</span>
              </div>

              {/* заголовок */}
              <h3 className="text-sm sm:text-base font-semibold text-darkGreen">
                {post.title}
              </h3>

              {/* текст */}
              <p className="text-xs sm:text-sm text-slate-600 flex-1">
                {post.excerpt}
              </p>

              {/* Read more */}
              <button
                type="button"
                className="group mt-2 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-darkGreen hover:text-lightGreen transition"
              >
                <span>Читати далі</span>
                <img
                  src={ArrowRight}
                  alt="ArrowRight"
                  className="group w-3.5 h-3.5 group-hover:invert transition"
                />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
