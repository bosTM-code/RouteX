function Error() {
  return (
    <main className="pt-16 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-5xl font-bold text-green-700 mb-4">
        404 — Сторінку не знайдено
      </h1>
      <p className="text-lg text-slate-600 mb-6">
        Можливо, вона була переміщена або тимчасово недоступна.
      </p>
      <a
        href="/RouteX/"
        className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
      >
        Повернутися на головну
      </a>
    </main>
  );
}
export default Error;
