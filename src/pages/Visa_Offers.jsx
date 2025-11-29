import HeroCommon from "../components/HeroCommon";
import VisaOfferCard from "../components/VisaOfferCard";

import Travel1 from "../assets/Travel1.jpg";
import Travel2 from "../assets/Travel2.png";
import Paris from "../assets/paris3.png";

import GermanyFlag from "../assets/flags/germany.svg";
import CanadaFlag from "../assets/flags/canada.svg";
import UkFlag from "../assets/flags/uk.svg";
import JapanFlag from "../assets/flags/japan.svg";
import KoreaFlag from "../assets/flags/southKorea.svg";
import TurkeyFlag from "../assets/flags/turkey.svg";

const visaOffers = [
  {
    id: "bd",
    title: "Робоча віза до Німеччини",
    description:
      "Підготовка документів на Blue Card або іншу робочу візу, супровід до моменту отримання штампа в паспорт.",
    price: 380,
    currency: "€",
    image: Travel1,
    badgeIcon: GermanyFlag,
  },
  {
    id: "kr",
    title: "Студентська віза до Канади",
    description:
      "Вступ до коледжу чи університету, навчальна віза та подальший шлях до ПМП.",
    price: 420,
    currency: "€",
    image: Travel2,
    badgeIcon: CanadaFlag,
  },
  {
    id: "tr",
    title: "Віза digital nomad до Португалії / Іспанії",
    description:
      "Легалізація віддаленої роботи, податкове планування та підготовка досьє для консульства.",
    price: 310,
    currency: "€",
    image: Paris,
    badgeIcon: UkFlag,
  },
  {
    id: "jp",
    title: "Віза до Японії для спеціалістів",
    description:
      "Підбір роботодавця, візовий супровід та пояснення всіх вимог до кандидатів.",
    price: 350,
    currency: "€",
    image: Travel1,
    badgeIcon: JapanFlag,
  },
  {
    id: "kr-work",
    title: "Робоча віза до Південної Кореї",
    description:
      "Оформлення робочої візи, контракт із компанією та підготовка до переїзду.",
    price: 290,
    currency: "€",
    image: Travel2,
    badgeIcon: KoreaFlag,
  },
  {
    id: "tr-tour",
    title: "Довгострокова віза до Туреччини",
    description:
      "Допомога з резиденцією, відкриттям рахунку та легальним перебуванням в країні.",
    price: 260,
    currency: "€",
    image: Paris,
    badgeIcon: TurkeyFlag,
  },
];

function Visa_Offers() {
  return (
    <div className="overflow-x-hidden bg-[#F4F8F2] min-h-screen">
      {/* спільний зелений банер */}
      <HeroCommon title="Візові пропозиції" />

      <main className="w-11/12 max-w-6xl mx-auto py-16 lg:py-20">
        {/* заголовок сторінки */}
        <header className="mb-10">
          <p className="uppercase text-xs sm:text-sm font-semibold tracking-[0.12em] text-darkGreen mb-2">
            Наші пакети
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-darkGreen leading-tight max-w-3xl">
            Візові пакети для різних країн та цілей переїзду
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
            Оберіть країну та формат візи, який вам підходить. Ми беремо на себе
            аналіз вимог, підготовку документів і супровід до моменту отримання
            візи.
          </p>
        </header>

        {/* сітка карток */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {visaOffers.map((offer) => (
            <VisaOfferCard key={offer.id} {...offer} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Visa_Offers;
