// src/pages/BlogDetails.jsx
import { useParams, Link } from "react-router-dom";
import HeroCommon from "../components/HeroCommon";
import {
  blogPosts,
  popularPostIds,
  categories,
  popularTags,
} from "../data/blogData";

import Facebook from "../assets/Facebook_green.svg";
import Instagram from "../assets/Instagram_green.svg";
import LinkedIn from "../assets/LinkedIn_green.svg";
import XIcon from "../assets/X_green.svg";

function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="bg-[#F4F8F2] min-h-screen">
        <HeroCommon title="Статтю не знайдено" />
        <div className="w-11/12 max-w-4xl mx-auto py-16">
          <p className="mb-4">
            Можливо, посилання застаріло або така публікація була видалена.
          </p>
          <Link to="/blog" className="text-[#1C7C54] font-medium underline">
            ← Повернутися до блогу
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F8F2] min-h-screen">
      <HeroCommon
        title="Деталі блогу"
        breadcrumb={`Головна / Блог / ${post.title}`}
      />

      <section className="w-11/12 max-w-6xl mx-auto py-12 lg:py-16 grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(320px,1fr)]">
        {/* Ліва колонка – основний контент */}
        <div className="space-y-8">
          <article className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            {/* велика картинка / заглушка */}
            <div className="bg-slate-200 h-56 sm:h-72 lg:h-80 w-full" />

            <div className="p-6 sm:p-8">
              {/* мета */}
              <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-3">
                <span>✍️ {post.author}</span>
                <span>📅 {post.date}</span>
                <span>🕒 {post.readTime}</span>
                <span>💬 {post.commentsCount} коментарів</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-slate-900">
                {post.title}
              </h1>

              {/* Основний текст */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {post.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>

          {/* Простий блок тегів / шарингу */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-semibold text-slate-800">Теги:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-slate-100 text-xs text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2 text-xs text-slate-500">
              <span>Поширити:</span>
              {/* соцмережі внизу фото */}
              <a href="x.com" aria-label="X / Twitter">
                <img src={XIcon} alt="" className="w-4 h-4" />
              </a>
              <a href="facebook.com" aria-label="Facebook">
                <img src={Facebook} alt="" className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <img src={Instagram} alt="" className="w-4 h-4" />
              </a>
              <a href="http://linkedin.com/" aria-label="LinkedIn">
                <img src={LinkedIn} alt="" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Форма коментаря */}
          <div className="bg-[#F4F8F2] border border-slate-200 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold mb-2 text-slate-900">
              Додати коментар
            </h2>
            <p className="text-sm text-slate-600 mb-5">
              Ми не публікуємо вашу електронну адресу. Обовʼязкові поля
              позначені *.
            </p>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Ваше ім’я *"
                  className="w-full rounded-xl border border-slate-200 py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#1C7C54]"
                  required
                />
                <input
                  type="email"
                  placeholder="Ваш email *"
                  className="w-full rounded-xl border border-slate-200 py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#1C7C54]"
                  required
                />
                <input
                  type="text"
                  placeholder="Тема повідомлення"
                  className="w-full rounded-xl border border-slate-200 py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#1C7C54]"
                />
              </div>

              <textarea
                rows={4}
                placeholder="Ваш коментар *"
                className="w-full rounded-xl border border-slate-200 py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#1C7C54]"
                required
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1C7C54] text-white text-sm font-medium hover:bg-[#165f3f] transition"
              >
                Надіслати коментар
              </button>
            </form>
          </div>
        </div>

        {/* Права колонка – такий самий сайдбар, як на сторінці блогу */}
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
              {popularPostIds.map((pid) => {
                const p = blogPosts.find((bp) => bp.id === pid);
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

export default BlogDetails;
