import { useNavigate } from "react-router-dom";
import errorImage from "../assets/error.svg";
import SearchIcon from "../assets/searchGreen.svg";

function ErrorPage() {
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get("query")?.trim();
    if (!query) return;
    // тимчасово просто виведемо в консоль
    console.log("Search:", query);
  };

  return (
    <section className="w-11/12 max-w-5xl mx-auto py-20 text-center">
      {/* Заголовок */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-darkGreen leading-tight">
        Упс! Перевірте підключення
        <br />
        та спробуйте ще раз
      </h1>

      {/* Опис */}
      <p className="text-slate-600 mt-4 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
        Можливо, сталася тимчасова помилка або сторінка недоступна. Перевірте
        інтернет-з’єднання або скористайтеся пошуком нижче.
      </p>

      {/* Поле пошуку */}
      <form
        onSubmit={handleSearchSubmit}
        className="relative max-w-lg mx-auto mt-8"
      >
        <input
          name="query"
          type="text"
          placeholder="Пошук…"
          className="w-full bg-[#F4F7F3] py-3 pl-4 pr-12 rounded-full outline-none text-sm border border-slate-300 focus:ring-2 focus:ring-lightGreen"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-lightGreen rounded-full"
        >
          <img src={SearchIcon} alt="search" className="w-8 h-8" />
        </button>
      </form>

      {/* Кнопка "На головну" */}
      <button
        type="button"
        onClick={() => navigate("/")}
        className="mt-8 px-8 py-3 bg-lightGreen text-white rounded-full text-sm font-semibold hover:bg-green-600 transition"
      >
        На головну
      </button>

      {/* Картинка */}
      <div className="mt-12">
        <img
          src={errorImage}
          alt="Error illustration"
          className="w-full max-w-4xl mx-auto pointer-events-none select-none"
        />
      </div>
    </section>
  );
}

export default ErrorPage;
