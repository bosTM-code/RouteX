import { Link } from "react-router-dom";

function HeroCommon({ title }) {
  return (
    <section className="w-11/12 mx-auto mt-6">
      <div className="bg-darkGreen rounded-3xl px-16 sm:px-24 py-10 sm:py-12 lg:py-14 text-white">
        {/* Заголовок сторінки */}
        <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold mb-3">
          {title}
        </h1>

        {/* Breadcrumbs: Головна > Назва сторінки */}
        <nav
          className="flex items-center gap-2 text-md sm:text-lg text-white/80"
          aria-label="Хлібні крихти"
        >
          <Link
            to="/"
            className="hover:text-white underline-offset-2 hover:underline"
          >
            Головна
          </Link>

          <span className="text-white/60">›</span>

          <span className="text-white">{title}</span>
        </nav>
      </div>
    </section>
  );
}

export default HeroCommon;
