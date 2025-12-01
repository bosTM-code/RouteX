// src/pages/Blog.jsx
import { Link } from "react-router-dom";
import HeroCommon from "../components/HeroCommon";
import {
  blogPosts,
  popularPostIds,
  categories,
  popularTags,
} from "../data/blogData";

function Blog() {
  return (
    <div className="bg-[#F4F8F2] min-h-screen">
      <HeroCommon title="Блог" breadcrumb="Головна / Блог" />

      <section className="w-11/12 max-w-6xl mx-auto py-12 lg:py-16 grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(320px,1fr)]">
        {/* Ліва колонка – список статей */}
        <div className="space-y-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
            >
              {/* картинка / заглушка */}
              <div className="bg-slate-200 h-52 sm:h-64 lg:h-72 w-full" />

              <div className="p-6 sm:p-8">
                {/* мета */}
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-3">
                  <span>✍️ {post.author}</span>
                  <span>📅 {post.date}</span>
                  <span>💬 {post.commentsCount} коментарів</span>
                </div>

                {/* заголовок */}
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-900">
                  {post.title}
                </h2>

                {/* короткий опис */}
                <p className="text-sm sm:text-base text-slate-600 mb-5">
                  {post.excerpt}
                </p>

                {/* кнопка */}
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#1C7C54] text-white text-sm font-medium hover:bg-[#165f3f] transition"
                >
                  Читати далі
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}

          {/* Пагінація-плейсхолдер */}
          <div className="flex justify-center gap-2 mt-6">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 text-sm bg-white">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-sm text-slate-500 bg-slate-100">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-sm text-slate-500 bg-slate-100">
              →
            </button>
          </div>
        </div>

        {/* Права колонка – сайдбар */}
        <aside className="space-y-6">
          {/* Пошук */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <h3 className="font-semibold mb-3 text-slate-900 text-sm">
              Пошук по блогу
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Введіть ключове слово"
                className="w-full rounded-xl border border-slate-200 py-2.5 px-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-[#1C7C54]"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                🔍
              </span>
            </div>
          </div>

          {/* Популярні пости */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <h3 className="font-semibold mb-4 text-slate-900 text-sm">
              Популярні пости
            </h3>
            <div className="space-y-3">
              {popularPostIds.map((id) => {
                const p = blogPosts.find((bp) => bp.id === id);
                if (!p) return null;
                return (
                  <Link
                    key={p.id}
                    to={`/blog/${p.id}`}
                    className="flex gap-3 items-center group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-slate-200" />
                    <div>
                      <p className="text-xs text-slate-500">{p.date}</p>
                      <p className="text-sm font-medium text-slate-800 group-hover:text-[#1C7C54]">
                        {p.title}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Категорії */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <h3 className="font-semibold mb-3 text-slate-900 text-sm">
              Категорії
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {categories.map((cat) => (
                <li key={cat} className="flex justify-between">
                  <span>{cat}</span>
                  <span className="text-slate-400">›</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Теги */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <h3 className="font-semibold mb-3 text-slate-900 text-sm">
              Популярні теги
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 rounded-full border border-slate-200 text-xs text-slate-600 bg-slate-50 hover:border-[#1C7C54] hover:text-[#1C7C54]"
                  type="button"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Blog;
