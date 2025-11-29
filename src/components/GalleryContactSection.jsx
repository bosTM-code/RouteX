import PassGreen from "../assets/PassGreen.svg";
import MailIcon from "../assets/mailGreen.svg";
import PhoneIcon from "../assets/phoneGreen.svg";
import LocationIcon from "../assets/locationGreen.svg";
import TelegramIcon from "../assets/telegramGreen.svg";

function GalleryContactSection() {
  return (
    <section className="w-11/12 max-w-6xl mx-auto mb-16">
      <div className="bg-white rounded-3xl shadow-sm px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Лівий текстовий блок */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={PassGreen} alt="" className="w-5 h-5" />
            <p className="uppercase text-xs sm:text-sm font-semibold tracking-[0.12em] text-darkGreen">
              Історії успіху
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-darkGreen mb-4 leading-tight">
            Маєте свою історію релокації? Поділіться нею з нами
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mb-5">
            Якщо ми допомогли вам з візою, навчанням чи переїздом — напишіть
            коротко про свій досвід. Це мотивує інших клієнтів і допомагає нам
            ставати кращими.
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Коротко опишіть свою ситуацію до та після переїзду.</li>
            <li>• Вкажіть, з якою країною та типом візи ми вам допомогли.</li>
            <li>• За бажанням можемо додати вашу історію до галереї.</li>
          </ul>
        </div>

        {/* Права колонка — форма */}
        <form className="space-y-3 sm:space-y-4">
          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center">
                <img src={MailIcon} alt="" className="w-4 h-4" />
              </span>
              <input
                type="email"
                placeholder="Ваш e-mail"
                className="w-full rounded-full border border-slate-200 bg-[#F4F8F2] px-10 py-2.5 text-sm outline-none focus:border-lightGreen"
              />
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center">
                <img src={PhoneIcon} alt="" className="w-4 h-4" />
              </span>
              <input
                type="tel"
                placeholder="Ваш телефон"
                className="w-full rounded-full border border-slate-200 bg-[#F4F8F2] px-10 py-2.5 text-sm outline-none focus:border-lightGreen"
              />
            </div>
          </div>

          {/* Address */}
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center">
              <img src={LocationIcon} alt="" className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Місто / країна"
              className="w-full rounded-full border border-slate-200 bg-[#F4F8F2] px-10 py-2.5 text-sm outline-none focus:border-lightGreen"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <span className="absolute top-3 left-4 flex items-center">
              <img src={TelegramIcon} alt="" className="w-4 h-4" />
            </span>
            <textarea
              rows={4}
              placeholder="Опишіть коротко свою історію..."
              className="w-full rounded-2xl border border-slate-200 bg-[#F4F8F2] px-10 py-3 text-sm outline-none resize-none focus:border-lightGreen"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-lightGreen text-white text-sm sm:text-base py-3 font-semibold hover:bg-green-600 transition"
          >
            Надіслати історію
          </button>
        </form>
      </div>
    </section>
  );
}

export default GalleryContactSection;
