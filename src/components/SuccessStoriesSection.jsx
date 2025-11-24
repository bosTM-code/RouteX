function SuccessStoriesSection() {
  const stories = [
    {
      country: "Німеччина",
      title: "Релокація ІТ-спеціаліста з Києва до Мюнхена",
      result: "Отримано Blue Card та релокація сімʼї за 6 місяців",
      tag: "Робоча віза / Blue Card",
    },
    {
      country: "Канада",
      title: "Навчання та подальша імміграція через коледж",
      result: "Студентська віза + шлях до ПМП через навчання",
      tag: "Студентська віза",
    },
    {
      country: "Польща",
      title: "Оформлення карти побиту для працівника",
      result: "Легальне перебування та робота на довгостроковій основі",
      tag: "Карта побиту",
    },
  ];

  return (
    <section className="w-11/12 max-w-6xl mx-auto mb-16">
      <div className="flex items-center gap-2 mb-3">
        <p className="uppercase text-darkGreen font-semibold text-xs sm:text-sm tracking-wide">
          Успішні історії
        </p>
        <span className="w-8 h-[2px] bg-lightGreen rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <h2 className="font-bold text-[1.5rem] md:text-[2.2rem] xl:text-[2.6rem] text-darkGreen max-w-[600px] leading-tight">
          Реальні історії клієнтів, які вже змінили країну проживання
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-[360px]">
          Ми супроводжуємо клієнтів від першої консультації до отримання візи:
          допомагаємо обрати програму, зібрати документи та пройти співбесіду.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stories.map((story) => (
          <article
            key={story.title}
            className="h-full rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="inline-flex px-3 py-1 rounded-full bg-lightGreen/10 text-[11px] font-semibold text-darkGreen uppercase tracking-wide">
              {story.tag}
            </span>
            <h3 className="text-lg font-bold text-darkGreen">
              {story.country}
            </h3>
            <p className="text-sm font-semibold text-slate-800">
              {story.title}
            </p>
            <p className="text-sm text-slate-600">{story.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SuccessStoriesSection;
