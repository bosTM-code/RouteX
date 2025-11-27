import FindContactBg from "../assets/findContact.svg";
import ContactPhoto from "../assets/contact-photo.webp";

function AboutContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-11/12 max-w-6xl mx-auto my-12 lg:my-16">
      <div className="relative rounded-[32px] overflow-hidden">
        {/* ФОТО ЯК ФОН УСЬОГО БЛОКУ */}
        <img
          src={ContactPhoto}
          alt="Фон контактного блоку"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Легка вуаль, щоб текст і форма краще читалися */}
        <div className="absolute inset-0 bg-[#F4F9F4]/60" />

        {/* Основний контент поверх фону */}
        <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12 flex flex-col lg:flex-row items-center gap-10">
          {/* ЛІВА ЧАСТИНА — SVG */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={FindContactBg}
              alt="Ілюстрація клієнта, що планує подорож"
              className="max-w-md w-full h-auto"
            />
          </div>

          {/* ПРАВА ЧАСТИНА — ЗАГОЛОВОК + ФОРМА */}
          <div className="w-full lg:w-1/2">
            <p className="uppercase text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-darkGreen mb-2">
              контактна інформація
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-darkGreen mb-6 leading-tight">
              Залишайтесь з нами на зв&apos;язку
            </h2>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-sm px-5 py-6 sm:px-7 sm:py-7 flex flex-col gap-4"
            >
              {/* Email + Телефон */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 text-sm">
                  <label className="text-slate-600">Ваш email</label>
                  <input
                    type="email"
                    required
                    placeholder="example@mail.com"
                    className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:border-lightGreen"
                  />
                </div>

                <div className="flex flex-col gap-1 text-sm">
                  <label className="text-slate-600">Ваш телефон</label>
                  <input
                    type="tel"
                    placeholder="+38 (0__) ___ __ __"
                    className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:border-lightGreen"
                  />
                </div>
              </div>

              {/* Адреса */}
              <div className="flex flex-col gap-1 text-sm">
                <label className="text-slate-600">Ваша адреса</label>
                <input
                  type="text"
                  placeholder="Місто, країна"
                  className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:border-lightGreen"
                />
              </div>

              {/* Повідомлення */}
              <div className="flex flex-col gap-1 text-sm">
                <label className="text-slate-600">Повідомлення</label>
                <textarea
                  rows={4}
                  placeholder="Коротко опишіть вашу ситуацію..."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm resize-none focus:outline-none focus:border-lightGreen"
                />
              </div>

              {/* Кнопка */}
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-lightGreen text-white text-sm sm:text-base font-semibold py-3.5 hover:bg-green-600 transition"
              >
                Надіслати повідомлення
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContactSection;
