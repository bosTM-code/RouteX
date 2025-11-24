function BlogPreviewSection() {
  const posts = [
    {
      title: "Як обрати правильну візову програму для релокації",
      tag: "Візові поради",
      time: "6 хв читання",
    },
    {
      title: "ТОП-5 помилок при підготовці документів на візу",
      tag: "Практика",
      time: "5 хв читання",
    },
    {
      title: "Що запитують на співбесіді в консульстві: реальний досвід",
      tag: "Співбесіда",
      time: "7 хв читання",
    },
  ];

  return (
    <section className="w-11/12 max-w-6xl mx-auto mb-20">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div>
          <p className="uppercase text-darkGreen font-semibold text-xs sm:text-sm tracking-wide mb-2">
            Корисні матеріали
          </p>
          <h2 className="font-bold text-[1.5rem] md:text-[2.2rem] xl:text-[2.6rem] text-darkGreen leading-tight">
            Блог та корисні статті про візи й релокацію
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 max-w-[360px]">
          Короткі й зрозумілі матеріали, які допоможуть підготуватися до
          релокації без зайвих нервів та хаосу в документах.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((post) => (
          <article
            key={post.title}
            className="h-full rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="space-y-2">
              <span className="inline-flex px-3 py-1 rounded-full bg-lightGreen/10 text-[11px] font-semibold text-darkGreen uppercase tracking-wide">
                {post.tag}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-darkGreen">
                {post.title}
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-2">{post.time}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogPreviewSection;
