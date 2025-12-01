// src/data/countryData.js

// прапори (шляхи підлаштуй під себе, якщо вони відрізняються)
import GermanyFlag from "../assets/flags/germany.svg";
import CanadaFlag from "../assets/flags/canada.svg";
import UkFlag from "../assets/flags/uk.svg";
import UsaFlag from "../assets/flags/usa.svg";
import CzechFlag from "../assets/flags/czechia.svg";
import NetherlandsFlag from "../assets/flags/netherlands.svg";
import PolandFlag from "../assets/flags/poland.svg";
import PortugalFlag from "../assets/flags/portugal.svg";
import SpainFlag from "../assets/flags/spain.svg";
import AustraliaFlag from "../assets/flags/australia.svg";
import EgyptFlag from "../assets/flags/egypt.svg";
import ArgentinaFlag from "../assets/flags/argentina.svg";
import BrazilFlag from "../assets/flags/brazil.svg";
import MexicoFlag from "../assets/flags/mexico.svg";
import AustriaFlag from "../assets/flags/austria.svg";

export const regions = [
  { id: "asia", name: "Азія" },
  { id: "europe", name: "Європа" },
  { id: "north-america", name: "Північна Америка" },
  { id: "australia-oceania", name: "Австралія та Океанія" },
  { id: "latin-america", name: "Латинська Америка" },
  { id: "africa", name: "Африка" },
];

export const countryData = [
  // ЄВРОПА
  {
    id: "germany",
    name: "Німеччина",
    region: "europe",
    regionName: "Європа",
    flag: GermanyFlag,
    shortDescription: "Робочі візи, Blue Card, навчання та бізнес.",
    capital: "Берлін",
    population: 84000000,
    language: "німецька",
    phoneCode: "49",
    services: [
      "Консультації щодо Blue Card та робочих віз",
      "Релокація ІТ-спеціалістів та фахівців з дефіцитних сфер",
      "Податкове та юридичне структурування для бізнесу",
    ],
  },
  {
    id: "czech",
    name: "Чехія",
    region: "europe",
    regionName: "Європа",
    flag: CzechFlag,
    shortDescription: "Робочі візи, навчання, програми для релокації сімʼї.",
    capital: "Прага",
    population: 10500000,
    language: "чеська",
    phoneCode: "420",
    services: [
      "Робочі візи та бізнес-віза (Živnostenský list)",
      "Реєстрація ФОП / компанії в Чехії",
      "Консультації з легального перебування сім'ї",
    ],
  },
  {
    id: "netherlands",
    name: "Нідерланди",
    region: "europe",
    regionName: "Європа",
    flag: NetherlandsFlag,
    shortDescription: "Робота, навчання, стартап-візи та бізнес-релокація.",
    capital: "Амстердам",
    population: 17500000,
    language: "нідерландська",
    phoneCode: "31",
    services: [
      "Візи для висококваліфікованих спеціалістів",
      "Супровід релокації в ІТ та стартап-секторі",
      "Консультації щодо програм для підприємців",
    ],
  },
  {
    id: "poland",
    name: "Польща",
    region: "europe",
    regionName: "Європа",
    flag: PolandFlag,
    shortDescription: "Робочі візи, карта побиту, навчання та бізнес.",
    capital: "Варшава",
    population: 38000000,
    language: "польська",
    phoneCode: "48",
    services: [
      "Робочі візи та воєводські запрошення",
      "Оформлення карт побиту та карти резидента ЄС",
      "Супровід відкриття ФОП/компанії для легальної роботи",
    ],
  },
  {
    id: "portugal",
    name: "Португалія",
    region: "europe",
    regionName: "Європа",
    flag: PortugalFlag,
    shortDescription: "Digital Nomad Visa, D7, робота та навчання.",
    capital: "Лісабон",
    population: 10300000,
    language: "португальська",
    phoneCode: "351",
    services: [
      "Візи D7, D8 та інші резидентські програми",
      "Підготовка документів для подання в консульство",
      "Податкове планування для релокації капіталу",
    ],
  },
  {
    id: "spain",
    name: "Іспанія",
    region: "europe",
    regionName: "Європа",
    flag: SpainFlag,
    shortDescription: "Student Visa, Digital Nomad Visa, релокація та робота.",
    capital: "Мадрид",
    population: 48000000,
    language: "іспанська",
    phoneCode: "34",
    services: [
      "Візи для цифрових кочівників та фрилансерів",
      "Довгострокове проживання за програмами резидентства",
      "Підбір регіону та моделі легального перебування",
    ],
  },
  {
    id: "uk",
    name: "Велика Британія",
    region: "europe",
    regionName: "Європа",
    flag: UkFlag,
    shortDescription: "Робочі, студентські та бізнес-візи.",
    capital: "Лондон",
    population: 67000000,
    language: "англійська",
    phoneCode: "44",
    services: [
      "Візи для фахівців та підприємців (Skilled Worker, Start-up, Innovator)",
      "Супровід відкриття компанії та банківських рахунків",
      "Консультації щодо податкового резидентства та compliance",
    ],
  },
  {
    id: "austria",
    name: "Австрія",
    region: "europe",
    regionName: "Європа",
    flag: AustriaFlag,
    shortDescription: "Робочі та бізнес-програми, дозволи на проживання.",
    capital: "Відень",
    population: 9100000,
    language: "німецька",
    phoneCode: "43",
    services: [
      "Red-White-Red Card та інші типи віз",
      "Консультації щодо переїзду для фахівців і їхніх сімей",
      "Супровід відкриття бізнесу та реєстрації компанії",
    ],
  },

  // ПІВНІЧНА АМЕРИКА
  {
    id: "usa",
    name: "США",
    region: "north-america",
    regionName: "Північна Америка",
    flag: UsaFlag,
    shortDescription: "Робочі, бізнес та студентські візи, імміграційні програми.",
    capital: "Вашингтон",
    population: 335000000,
    language: "англійська",
    phoneCode: "1",
    services: [
      "Підбір візових категорій (B1/B2, F1, H-1B тощо)",
      "Підготовка документів для співбесіди в посольстві",
      "Довгострокові стратегії перебування та релокації",
    ],
  },
  {
    id: "canada",
    name: "Канада",
    region: "north-america",
    regionName: "Північна Америка",
    flag: CanadaFlag,
    shortDescription: "Express Entry, навчання, робота та родинне воззʼєднання.",
    capital: "Оттава",
    population: 40000000,
    language: "англійська, французька",
    phoneCode: "1",
    services: [
      "Аналіз шансів за імміграційними програмами",
      "Підготовка документів на робочу чи навчальну візу",
      "Планування шляху до ПМП та громадянства",
    ],
  },

  // ЛАТИНСЬКА АМЕРИКА
  {
    id: "argentina",
    name: "Аргентина",
    region: "latin-america",
    regionName: "Латинська Америка",
    flag: ArgentinaFlag,
    shortDescription: "Навчання, довгострокове перебування, Digital Nomad.",
    capital: "Буенос-Айрес",
    population: 46000000,
    language: "іспанська",
    phoneCode: "54",
  },
  {
    id: "brazil",
    name: "Бразилія",
    region: "latin-america",
    regionName: "Латинська Америка",
    flag: BrazilFlag,
    shortDescription: "Робочі та бізнес-візи, програми для інвесторів.",
    capital: "Бразиліа",
    population: 215000000,
    language: "португальська",
    phoneCode: "55",
  },
  {
    id: "mexico",
    name: "Мексика",
    region: "latin-america",
    regionName: "Латинська Америка",
    flag: MexicoFlag,
    shortDescription: "Тимчасовий/постійний резидент, Digital Nomad.",
    capital: "Мехіко",
    population: 130000000,
    language: "іспанська",
    phoneCode: "52",
  },

  // АВСТРАЛІЯ ТА ОКЕАНІЯ
  {
    id: "australia",
    name: "Австралія",
    region: "australia-oceania",
    regionName: "Австралія та Океанія",
    flag: AustraliaFlag,
    shortDescription: "Work & Study, skilled migration, робочі візи.",
    capital: "Канберра",
    population: 26000000,
    language: "англійська",
    phoneCode: "61",
  },

  // АФРИКА
  {
    id: "egypt",
    name: "Єгипет",
    region: "africa",
    regionName: "Африка",
    flag: EgyptFlag,
    shortDescription: "Робочі та інвестиційні програми, довгострокове проживання.",
    capital: "Каїр",
    population: 112000000,
    language: "арабська",
    phoneCode: "20",
  },
];
