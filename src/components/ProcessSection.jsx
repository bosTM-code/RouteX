import PassGreen from "../assets/PassGreen.svg";
import ProcessLines from "../assets/coaching-lines.svg";

const steps = [
  {
    id: "01",
    title: "Аналіз вашої ситуації",
    text: "Розбираємо вашу освіту, досвід, сімейний стан та цілі переїзду, щоб обрати оптимальні країни й програми.",
  },
  {
    id: "02",
    title: "Підбір візових рішень",
    text: "Пояснюємо вимоги кожної програми, формуємо перелік документів та план дій по строках і етапах.",
  },
  {
    id: "03",
    title: "Підготовка й подання документів",
    text: "Допомагаємо заповнити анкети, перевіряємо пакет документів і готуємо вас до подачі та співбесіди.",
  },
];

function ProcessSection() {
  return (
    <section className="w-11/12 max-w-6xl mx-auto mb-16">
      <div className="relative rounded-[32px] bg-[#f4f9f4] px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16 overflow-hidden">
        {/* фон з хвилястими лініями */}
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <img
            src={ProcessLines}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* контент поверх фону */}
        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          {/* бейдж */}
          <div className="flex items-center gap-2 text-darkGreen">
            <img src={PassGreen} alt="" className="w-5 h-5" />
            <p className="uppercase text-xs sm:text-sm font-semibold tracking-[0.14em]">
              огляд процесу
            </p>
          </div>

          {/* заголовок */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] leading-tight font-bold text-darkGreen">
            Основні етапи роботи
            <br className="hidden sm:block" />з вашим візовим кейсом
          </h2>

          {/* картки кроків */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {steps.map((step) => (
              <article
                key={step.id}
                className="bg-white/90 rounded-3xl shadow-sm px-6 py-7 sm:px-7 sm:py-8 text-left flex flex-col gap-3 backdrop-blur"
              >
                <p
                  className="text-3xl sm:text-4xl font-jakarta font-semibold text-white
  [text-shadow:_0_0_2px_#0B4F39,_0_0_3px_#0B4F39,_0_0_4px_#0B4F39]"
                >
                  {step.id}
                </p>
                <h3 className="text-sm sm:text-base font-semibold text-darkGreen">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
