// src/components/BlogSection.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PassGreen from "../assets/PassGreen.svg";
import ArrowLeftSmall from "../assets/ArrowLeftGreen.svg";
import ArrowRightSmall from "../assets/ArrowRightGreen.svg";
import ArrowRight from "../assets/arrowRightGreenSmall.svg";
import { blogPosts } from "../data/blogData";

function BlogSection() {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const visiblePosts = [];
  for (let i = 0; i < Math.min(visibleCount, blogPosts.length); i++) {
    visiblePosts.push(blogPosts[(startIndex + i) % blogPosts.length]);
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
            {/* Верхній блок під картинку */}
            <div className="bg-slate-200 h-44 sm:h-52 lg:h-56 w-full">
              {post.img && (
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              )}
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
                onClick={() => navigate(`/blog/${post.id}`)}
                className="group mt-2 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-darkGreen hover:text-lightGreen transition"
              >
                <span>Читати далі</span>
                <img
                  src={ArrowRight}
                  alt="ArrowRight"
                  className="w-3.5 h-3.5 group-hover:invert transition"
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
